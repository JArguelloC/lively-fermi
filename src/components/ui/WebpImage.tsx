import React from 'react'
import { buildResponsiveSrcSet, isLocalImagePath, isWebpImage, RESPONSIVE_IMAGE_WIDTHS } from '../../utils/responsiveImages'

type WebpImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  fallbackSrc?: string
  responsiveWidths?: number[]
}

export default function WebpImage({
  src,
  fallbackSrc = src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  onError,
  sizes,
  responsiveWidths = RESPONSIVE_IMAGE_WIDTHS,
  ...props
}: WebpImageProps) {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.src = fallbackSrc
    onError?.(event)
  }

  const responsiveSrcSet = isLocalImagePath(src)
    ? buildResponsiveSrcSet(src, responsiveWidths)
    : undefined

  if (!responsiveSrcSet) {
    return (
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={handleError}
        sizes={sizes}
        {...props}
      />
    )
  }

  return (
    <picture>
      <source srcSet={responsiveSrcSet} sizes={sizes} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onError={handleError}
        sizes={sizes}
        {...props}
      />
    </picture>
  )
}