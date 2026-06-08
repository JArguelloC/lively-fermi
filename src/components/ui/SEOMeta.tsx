import { Helmet } from 'react-helmet-async'

interface SEOMetaProps {
  title: string
  description: string
  ogImage?: string
  ogType?: string
  canonical?: string
}

export const SEOMeta = ({
  title,
  description,
  ogImage = 'https://groove-store.com/og-image.png',
  ogType = 'website',
  canonical,
}: SEOMetaProps) => {
  return (
    <Helmet>
      <title>{title} | Groove Music Store</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  )
}

export default SEOMeta
