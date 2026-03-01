const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()
const distDir = path.join(rootDir, 'dist')

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
  'feed.xml',
  '_redirects',
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

function run() {
  cleanDist()
  let copiedFiles = 0
  for (const file of rootFiles) {
    if (copyFileIfPresent(file)) {
      copiedFiles += 1
    }
  }
  copiedFiles += copyRootImages()
  console.log(`Static build complete. Copied ${copiedFiles} files to dist/.`)
}

run()
