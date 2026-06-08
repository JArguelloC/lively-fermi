export const NEWS_FALLBACK_IMAGE = '/images/news/generic-cover.svg'

export function getNewsCoverImage(coverImage?: string | null): string {
  return coverImage && coverImage.trim() ? coverImage : NEWS_FALLBACK_IMAGE
}
