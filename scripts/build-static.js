const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()
const distDir = path.join(rootDir, 'dist')
const SITE_URL = 'https://thevirtualqueue.com'
const SANITY_API = 'https://8qrlygx8.api.sanity.io/v2024-02-24/data/query/production'
const GROQ = '*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc)[0...50] { "id": slug.current, title, "excerpt": pt::text(body)[0..300], "image": mainImage.asset->url, "category": categories[0]->title, "date": coalesce(publishedAt, _createdAt) }'

function escapeXml(str) {
  if (!str) return ''
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')
}

function toRfc822(d) {
  if (!d) return ''
  return new Date(d).toUTCString()
}

async function buildRssFeed() {
  const url = `${SANITY_API}?query=${encodeURIComponent(GROQ)}`
  const res = await fetch(url)
  const json = await res.json()
  const posts = json.result || []
  const items = posts.map((p) => {
    const link = `${SITE_URL}/article?id=${encodeURIComponent(p.id || '')}`
    const img = p.image ? `\n    <enclosure url="${escapeXml(p.image)}" type="image/jpeg" />` : ''
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
  fs.writeFileSync(path.join(distDir, 'feed.xml'), rss)
}

const rootFiles = [
  'index.html',
  'disney.html',
  'universal.html',
  'other.html',
  'article.html',
  'about.html',
  'contact.html',
  'legal.html',
  'global.js',
  'main.css',
  'sitemap.xml',
  'robots.txt',
  'CNAME',
  'articles.json',
]

const imageExtensions = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.svg',
  '.ico',
])

function cleanDist() {
  fs.rmSync(distDir, {recursive: true, force: true})
  fs.mkdirSync(distDir, {recursive: true})
}

function copyFileIfPresent(fileName) {
  const sourcePath = path.join(rootDir, fileName)
  if (!fs.existsSync(sourcePath)) {
    return false
  }
  const destinationPath = path.join(distDir, fileName)
  fs.copyFileSync(sourcePath, destinationPath)
  return true
}

function copyRootImages() {
  let copied = 0
  const entries = fs.readdirSync(rootDir, {withFileTypes: true})
  for (const entry of entries) {
    if (!entry.isFile()) {
      continue
    }
    const ext = path.extname(entry.name).toLowerCase()
    if (!imageExtensions.has(ext)) {
      continue
    }
    const sourcePath = path.join(rootDir, entry.name)
    const destinationPath = path.join(distDir, entry.name)
    fs.copyFileSync(sourcePath, destinationPath)
    copied += 1
  }
  return copied
}

async function run() {
  cleanDist()
  let copiedFiles = 0
  for (const file of rootFiles) {
    if (copyFileIfPresent(file)) {
      copiedFiles += 1
    }
  }
  copiedFiles += copyRootImages()
  try {
    await buildRssFeed()
    console.log('RSS feed generated at dist/feed.xml')
  } catch (e) {
    console.warn('RSS feed build failed (Sanity unreachable?):', e.message)
  }
  console.log(`Static build complete. Copied ${copiedFiles} files to dist/.`)
}

run()
