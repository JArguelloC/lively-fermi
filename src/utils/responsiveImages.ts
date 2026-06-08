export const RESPONSIVE_IMAGE_WIDTHS = [320, 640, 960, 1280]

export function isLocalImagePath(src: string) {
  return src.startsWith('/images/')
}

export function isWebpImage(src: string) {
  return /\.webp(?:[?#].*)?$/i.test(src)
}

export function buildResponsiveImageUrl(src: string, width: number) {
  const extensionIndex = src.lastIndexOf('.')
  const basePath = extensionIndex === -1 ? src : src.slice(0, extensionIndex)
  const responsiveBasePath = basePath.replace(/^\/images\//, '/images/_responsive/')
  return `${responsiveBasePath}-${width}w.webp`
}

export function buildResponsiveSrcSet(src: string, widths = RESPONSIVE_IMAGE_WIDTHS) {
  return widths.map(width => `${buildResponsiveImageUrl(src, width)} ${width}w`).join(', ')
}