import { MetadataRoute } from 'next'

const baseUrl = 'https://alanbouo.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/keystatic/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
