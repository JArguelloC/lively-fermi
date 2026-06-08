import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT_DIR = process.cwd()
const SOURCE_DIR = path.join(ROOT_DIR, 'public', 'images')
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'images', '_responsive')
const WIDTHS = [320, 640, 960, 1280]
const VALID_EXTENSIONS = new Set(['.webp', '.jpg', '.jpeg', '.png'])

async function walk(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath))
      continue
    }

    if (!VALID_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      continue
    }

    files.push(fullPath)
  }

  return files
}

async function ensureDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

async function generateVariants(inputPath) {
  const relativePath = path.relative(SOURCE_DIR, inputPath)
  const metadata = await sharp(inputPath).metadata()
  if (!metadata.width) {
    return 0
  }

  const sourceName = path.basename(inputPath, path.extname(inputPath))
  const targetDir = path.join(OUTPUT_DIR, path.dirname(relativePath))
  const widths = WIDTHS.filter((width) => width < metadata.width)

  let createdCount = 0
  for (const width of widths) {
    const outputPath = path.join(targetDir, `${sourceName}-${width}w.webp`)
    await ensureDir(outputPath)
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath)
    createdCount += 1
  }

  return createdCount
}

async function main() {
  const files = await walk(SOURCE_DIR)
  let totalCreated = 0

  for (const filePath of files) {
    const created = await generateVariants(filePath)
    totalCreated += created
    console.log(`[responsive-images] ${path.relative(ROOT_DIR, filePath)} -> ${created} variants`)
  }

  console.log(`[responsive-images] Generated ${totalCreated} responsive variants`)
}

main().catch((error) => {
  console.error('[responsive-images] Failed to generate variants:', error)
  process.exit(1)
})