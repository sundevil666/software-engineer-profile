import serverlessChromium from '@sparticuz/chromium'
import type { H3Event } from 'h3'
import process from 'node:process'
import { chromium } from 'playwright-core'

const resumeFilename
  = 'Serhii_Tokmakov_Vue_TypeScript_Frontend_Developer_CV.pdf'
const pdfCacheTtlMs = 5 * 60 * 1000
const generationTimeoutMs = 30 * 1000

const cachedPdfs = new Map<string, { createdAt: number, value: Buffer }>()
const generationsInFlight = new Map<string, Promise<Buffer>>()

function getLocalChromePath() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  if (process.platform === 'darwin') {
    return '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  }
  return undefined
}

function getResumeOrigin(event: H3Event) {
  if (process.env.PUBLIC_SITE_URL) return process.env.PUBLIC_SITE_URL
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return getRequestURL(event).origin
}

async function generateResumePdf(event: H3Event, locale: string): Promise<Buffer> {
  const isServerlessLinux = process.platform === 'linux'
  const executablePath = isServerlessLinux
    ? await serverlessChromium.executablePath()
    : getLocalChromePath()

  if (!executablePath) {
    throw createError({
      statusCode: 503,
      statusMessage: 'PDF generation is unavailable.',
    })
  }

  let browser

  try {
    browser = await chromium.launch({
      args: isServerlessLinux ? serverlessChromium.args : ['--no-sandbox'],
      executablePath,
      headless: true,
    })

    const page = await browser.newPage()
    const resumeUrl = new URL(`/resume?lang=${locale}`, getResumeOrigin(event)).toString()

    await page.goto(resumeUrl, {
      waitUntil: 'networkidle',
      timeout: generationTimeoutMs,
    })
    await page.emulateMedia({ media: 'print' })

    return await page.pdf({
      format: 'A4',
      outline: true,
      preferCSSPageSize: true,
      printBackground: true,
      tagged: true,
    })

  }
  catch (error) {
    console.error('Resume PDF generation failed.', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Could not generate the resume PDF.',
    })
  }
  finally {
    await browser?.close()
  }
}

async function getResumePdf(event: H3Event) {
  const requestedLocale = getQuery(event).lang
  const locale = typeof requestedLocale === 'string'
    && ['en', 'de', 'pl', 'sk', 'uk', 'ru'].includes(requestedLocale)
    ? requestedLocale
    : 'en'
  const cachedPdf = cachedPdfs.get(locale)
  if (cachedPdf && Date.now() - cachedPdf.createdAt < pdfCacheTtlMs) {
    return { pdf: cachedPdf.value, locale }
  }

  if (!generationsInFlight.has(locale)) {
    const generation = generateResumePdf(event, locale)
      .then((value) => {
        cachedPdfs.set(locale, { createdAt: Date.now(), value })
        return value
      })
      .finally(() => {
        generationsInFlight.delete(locale)
      })
    generationsInFlight.set(locale, generation)
  }

  return { pdf: await generationsInFlight.get(locale)!, locale }
}

export default defineEventHandler(async (event) => {
  const { pdf, locale } = await getResumePdf(event)
  const localizedFilename = resumeFilename.replace('.pdf', `_${locale.toUpperCase()}.pdf`)

  setResponseHeaders(event, {
    'cache-control': 'public, max-age=300, stale-while-revalidate=86400',
    'content-disposition': `attachment; filename="${localizedFilename}"`,
    'content-length': pdf.byteLength,
    'content-type': 'application/pdf',
    'x-content-type-options': 'nosniff',
  })

  return pdf
})
