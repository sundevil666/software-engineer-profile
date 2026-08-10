export default defineEventHandler((event) => {
  const homepage = new URL('/', getRequestURL(event).origin).toString()

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${homepage}</loc></url>
</urlset>`
})
