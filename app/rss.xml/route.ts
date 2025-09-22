import { NextResponse } from 'next/server'

// Temporary hardcoded posts - will be replaced with contentlayer data
const posts = [
  {
    title: "Complete Guide: Moving from Cloud AI to Self-Hosted AI Models",
    description: "Step-by-step guide to deploy your own AI models locally, enhance data privacy, and create cost-effective AI solutions.",
    date: "2025-02-09",
    slug: "migrating-from-cloud-to-self-hosted",
    category: "Tutorial",
    featured: true,
  },
  {
    title: "Why My Olive Grove Framework Is Changing AI Ethics",
    description: "Exploring how agriculture-inspired thinking creates more sustainable and ethical AI deployment strategies.",
    date: "2025-01-15",
    slug: "olive-grove-framework-ai-ethics",
    category: "Ethics",
    featured: false,
  },
  {
    title: "Privacy Audit Checklist: 10 Signs Your AI Setup Needs Security Updates",
    description: "A comprehensive checklist to assess your current AI infrastructure and identify potential privacy vulnerabilities.",
    date: "2025-01-08",
    slug: "privacy-audit-checklist-ai",
    category: "Security",
    featured: false,
  },
  {
    title: "From Marseille Startup to Global Self-Hosted AI Leader",
    description: "Personal journey and lessons learned building an ethical AI consultancy in the heart of French innovation.",
    date: "2024-12-22",
    slug: "marseille-startup-to-global-ai",
    category: "Personal",
    featured: false,
  },
  {
    title: "Cost Analysis: Why Self-Hosted AI Saves Money in the Long Run",
    description: "Detailed financial breakdown showing how switching to self-hosted AI models reduces operational costs by up to 60%.",
    date: "2024-12-15",
    slug: "cost-analysis-self-hosted-ai",
    category: "Business",
    featured: false,
  }
]

export async function GET() {
  const baseUrl = 'https://alanbouo.com'
  const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alan Bouo - AI Self-Hosting Expert</title>
    <description>Latest insights and practical guides on self-hosting AI models, data privacy management, and ethical AI deployment.</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <managingEditor>alan@alanbouo.com (Alan Bouo)</managingEditor>
    <webMaster>alan@alanbouo.com (Alan Bouo)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>alan@alanbouo.com (Alan Bouo)</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}
