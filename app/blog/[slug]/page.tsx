import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { articles, getArticle, blockToText, type Block } from '../../../data/articles'

interface Props {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getArticle(params.slug)

  if (!post) {
    return {
      title: 'Article introuvable',
      description: "L'article demandé est introuvable."
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
      siteName: 'Alan Bouo — Expert IA & cybersécurité',
      locale: 'fr_FR',
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

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} style={{ fontSize: '1.6rem', margin: '2.5rem 0 1rem', color: 'var(--primary-blue)' }}>
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p key={index} style={{ marginBottom: '1.25rem' }}>
          {block.text}
        </p>
      )
    case 'ul':
      return (
        <ul key={index} style={{ margin: '0 0 1.5rem 1.25rem', paddingLeft: '1rem' }}>
          {block.items.map((item, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>
          ))}
        </ul>
      )
    case 'quote':
      return (
        <blockquote key={index} style={{
          borderLeft: '4px solid var(--cta-yellow)',
          paddingLeft: '1.25rem',
          margin: '1.5rem 0',
          fontStyle: 'italic',
          color: '#555'
        }}>
          {block.text}
        </blockquote>
      )
    default:
      return null
  }
}

export default function BlogPost({ params }: Props) {
  const post = getArticle(params.slug)

  if (!post) {
    notFound()
  }

  const baseUrl = 'https://alanbouo.com'
  const postUrl = `${baseUrl}/blog/${post.slug}`
  const wordCount = post.content.map(blockToText).join(' ').split(/\s+/).length

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
    wordCount,
    timeRequired: `PT${post.readingTime}M`,
    inLanguage: 'fr-FR',
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
          background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
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
                {new Date(post.date).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span>
                <i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>
                {post.readingTime} min de lecture
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
              {post.content.map(renderBlock)}
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
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Partager cet article</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://x.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title)}&via=alanbouo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#111',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                  X
                </a>

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
                Retour au blog
              </Link>

              <Link
                href="/contact"
                style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}
              >
                Me contacter
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
