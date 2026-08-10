export default defineEventHandler((event) => {
  const sitemapUrl = new URL('/sitemap.xml', getRequestURL(event).origin).toString()

  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return `User-agent: *
Allow: /
Disallow: /resume
Disallow: /api/

Sitemap: ${sitemapUrl}
`
})
