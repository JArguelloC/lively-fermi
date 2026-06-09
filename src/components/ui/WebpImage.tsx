import React, { useRef, useEffect, useState } from 'react'

type WebpImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  fallbackSrc?: string
}

export default function WebpImage({
  src,
  fallbackSrc,
  alt,
  loading = 'eager',
  ...props
}: WebpImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const [displaySrc, setDisplaySrc] = useState<string>(src)
  const [hasError, setHasError] = useState(false)

  // Auto-generar fallback de jpg si src es webp
  const autoFallback = src.endsWith('.webp') ? src.replace(/\.webp$/i, '.jpg') : src
  const finalFallback = fallbackSrc || autoFallback

  const handleError = () => {
    // Si falla y aún no hemos intentado fallback, usarlo
    if (!hasError) {
      setDisplaySrc(finalFallback)
      setHasError(true)
    }
  }

  // Intersection Observer solo para imágenes con loading='lazy'
  useEffect(() => {
    if (loading === 'eager' || !imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDisplaySrc(src)
          observer.disconnect()
        }
      },
      { rootMargin: '100px', threshold: 0 }
    )

    observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [src, loading])

  // Filtrar props no válidas
  const { className, style, width, height, sizes, ...validProps } = props

  return (
    <img
      ref={imgRef}
      src={displaySrc}
      alt={alt}
      loading={loading === 'lazy' ? 'lazy' : 'eager'}
      decoding="async"
      onError={handleError}
      className={className}
      style={style}
      {...validProps}
    />
  )
}