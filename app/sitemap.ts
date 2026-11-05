import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

import { SITE_URL as baseUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/activities`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/amstram`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/amstram/support`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/amstram/confidentialite`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified || post.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
