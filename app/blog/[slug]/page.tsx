import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

// Temporary hardcoded posts - will be replaced with contentlayer data
const posts = [
  {
    title: "Complete Guide: Moving from Cloud AI to Self-Hosted AI Models",
    description: "Step-by-step guide to deploy your own AI models locally, enhance data privacy, and create cost-effective AI solutions.",
    date: "2025-02-09",
    modified: "2025-02-09",
    slug: "migrating-from-cloud-to-self-hosted",
    category: "Tutorial",
    tags: ["AI", "Self-Hosting", "Privacy", "Deployment", "Cloud Migration"],
    featured: true,
    readingTime: 8,
    content: "Complete guide content here..."
  },
  {
    title: "Why My Olive Grove Framework Is Changing AI Ethics",
    description: "Exploring how agriculture-inspired thinking creates more sustainable and ethical AI deployment strategies.",
    date: "2025-01-15",
    modified: "2025-01-15",
    slug: "olive-grove-framework-ai-ethics",
    category: "Ethics",
    tags: ["AI Ethics", "Sustainability", "Framework", "Agriculture", "Responsible AI"],
    featured: false,
    readingTime: 5,
    content: "Olive Grove Framework content here..."
  },
  {
    title: "Privacy Audit Checklist: 10 Signs Your AI Setup Needs Security Updates",
    description: "A comprehensive checklist to assess your current AI infrastructure and identify potential privacy vulnerabilities.",
    date: "2025-01-08",
    modified: "2025-01-08",
    slug: "privacy-audit-checklist-ai",
    category: "Security",
    tags: ["Privacy", "Security", "Audit", "Compliance", "Data Protection"],
    featured: false,
    readingTime: 7,
    content: "Privacy audit content here..."
  },
  {
    title: "From Marseille Startup to Global Self-Hosted AI Leader",
    description: "Personal journey and lessons learned building an ethical AI consultancy in the heart of French innovation.",
    date: "2024-12-22",
    modified: "2024-12-22",
    slug: "marseille-startup-to-global-ai",
    category: "Personal",
    tags: ["Entrepreneurship", "AI", "France", "Startup", "Leadership"],
    featured: false,
    readingTime: 4,
    content: "Marseille startup story content here..."
  },
  {
    title: "Cost Analysis: Why Self-Hosted AI Saves Money in the Long Run",
    description: "Detailed financial breakdown showing how switching to self-hosted AI models reduces operational costs by up to 60%.",
    date: "2024-12-15",
    modified: "2024-12-15",
    slug: "cost-analysis-self-hosted-ai",
    category: "Business",
    tags: ["Cost Analysis", "ROI", "Business", "Economics", "Self-Hosting"],
    featured: false,
    readingTime: 6,
    content: "Cost analysis content here..."
  }
]

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const baseUrl = 'https://alanbouo.com'
  const postUrl = `${baseUrl}/blog/${post.slug}`

  return {
    title: `${post.title} | Alan Bouo`,
    description: post.description,
    keywords: post.tags.join(', '),
    authors: [{ name: 'Alan Bouo' }],
    creator: 'Alan Bouo',
    publisher: 'Alan Bouo',
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: 'Alan Bouo - AI Self-Hosting Expert',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: ['Alan Bouo'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: '@alanbouo',
      site: '@alanbouo',
    },
    alternates: {
      canonical: postUrl,
    },
    other: {
      'article:published_time': post.date,
      'article:modified_time': post.modified,
      'article:author': 'Alan Bouo',
      'article:section': post.category,
      'article:tag': post.tags.join(','),
    }
  }
}

export default function BlogPost({ params }: Props) {
  const post = posts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const baseUrl = 'https://alanbouo.com'
  const postUrl = `${baseUrl}/blog/${post.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${baseUrl}/img/blog/${post.slug}-og.jpg`,
    author: {
      '@type': 'Person',
      name: 'Alan Bouo',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Alan Bouo',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.modified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    wordCount: post.content.split(' ').length,
    timeRequired: `PT${post.readingTime}M`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main>
        {/* Article Header */}
        <section style={{ 
          padding: '4rem 1rem 2rem', 
          backgroundColor: 'var(--primary-blue)', 
          color: 'var(--white)' 
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{
                backgroundColor: 'var(--cta-yellow)',
                color: 'var(--primary-blue)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {post.category}
              </span>
            </div>
            
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              marginBottom: '1rem',
              lineHeight: '1.2'
            }}>
              {post.title}
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              {post.description}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '0.9rem',
              opacity: 0.8
            }}>
              <span>
                <i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span>
                <i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>
                {post.readingTime} min read
              </span>
              <span>
                <i className="fas fa-user" style={{ marginRight: '0.5rem' }}></i>
                Alan Bouo
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article style={{ 
          padding: '4rem 1rem', 
          backgroundColor: 'var(--white)' 
        }}>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.8',
            fontSize: '1.1rem'
          }}>
            <div style={{ marginBottom: '3rem' }}>
              {post.content}
            </div>

            {/* Tags */}
            <div style={{ 
              borderTop: '1px solid #eee',
              paddingTop: '2rem',
              marginBottom: '3rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Tags</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: 'var(--light-gray)',
                      color: 'var(--text-color)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.9rem',
                      border: '1px solid #ddd'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Buttons */}
            <div style={{ 
              borderTop: '1px solid #eee',
              paddingTop: '2rem',
              marginBottom: '3rem'
            }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Share this article</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => navigator.clipboard.writeText(postUrl)}
                  style={{
                    backgroundColor: 'var(--light-gray)',
                    border: '1px solid #ddd',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-link"></i>
                  Copy Link
                </button>
                
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#0077b5',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}&via=alanbouo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#1da1f2',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fab fa-twitter"></i>
                  Twitter
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div style={{ 
              borderTop: '1px solid #eee',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <Link
                href="/blog"
                style={{
                  color: 'var(--primary-blue)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontWeight: 'bold'
                }}
              >
                <i className="fas fa-arrow-left"></i>
                Back to Blog
              </Link>
              
              <Link
                href="/contact"
                style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
