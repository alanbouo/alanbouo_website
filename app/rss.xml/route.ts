import { NextResponse } from 'next/server'
import { articles } from '../../data/articles'

export async function GET() {
  const baseUrl = 'https://alanbouo.com'
  const sortedPosts = [...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alan Bouo — Expert IA &amp; cybersécurité</title>
    <description>Vulgarisation de l'IA et de la cybersécurité, et coulisses de ma construction de SaaS à revenus récurrents, documentées en public.</description>
    <link>${baseUrl}</link>
    <language>fr-FR</language>
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
