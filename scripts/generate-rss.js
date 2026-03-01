/**
 * Generates feed.xml from Sanity CMS posts and saves to dist/feed.xml
 * Run during build: npm run build (which runs this via npm run generate-rss)
 */
const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()
const distDir = path.join(rootDir, 'dist')
const SITE_URL = 'https://thevirtualqueue.com'
const SANITY_PROJECT = '8qrlygx8'
const SANITY_DATASET = 'production'
const SANITY_API = `https://${SANITY_PROJECT}.api.sanity.io/v2024-02-24/data/query/${SANITY_DATASET}`

const GROQ_QUERY = `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0...50] {
  "id": slug.current,
  title,
  "excerpt": pt::text(body)[0..300],
  "image": mainImage.asset->url,
  "category": categories[0]->title,
  "date": coalesce(publishedAt, _createdAt)
}`

function escapeXml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRfc822(d) {
  if (!d) return ''
  return new Date(d).toUTCString()
}

async function generateRssFeed() {
  const url = `${SANITY_API}?query=${encodeURIComponent(GROQ_QUERY)}`
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error(`Sanity API error: ${res.status} ${res.statusText}`)
  }

  const json = await res.json()
  const posts = json.result || []

  const items = posts.map((p) => {
    const link = `${SITE_URL}/article?id=${encodeURIComponent(p.id || '')}`
    const img = p.image
      ? `\n    <enclosure url="${escapeXml(p.image)}" type="image/jpeg" />`
      : ''
    return `  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${escapeXml(link)}</link>
    <guid isPermaLink="true">${escapeXml(link)}</guid>
    <pubDate>${toRfc822(p.date)}</pubDate>
    <description>${escapeXml((p.excerpt || '').trim())}</description>${img}
  </item>`
  }).join('\n')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Virtual Queue | Theme Park News &amp; Updates</title>
    <link>${SITE_URL}</link>
    <description>The Virtual Queue delivers fast, condensed theme park news covering Disney, Universal, and beyond.</description>
    <language>en-us</language>
    <lastBuildDate>${toRfc822(new Date())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  const outputPath = path.join(distDir, 'feed.xml')
  fs.writeFileSync(outputPath, rss)
  console.log(`RSS feed generated: ${outputPath} (${posts.length} posts)`)
}

generateRssFeed().catch((err) => {
  console.error('RSS feed generation failed:', err.message)
  process.exit(1)
})
