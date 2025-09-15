import Link from 'next/link'

export const metadata = {
  title: 'Blog - Alanbouo | AI Self-Hosting Guide',
  description: 'Latest insights and practical guides on self-hosting AI models, data privacy management, and ethical AI deployment.',
}

export default function BlogPage() {
  const articles = [
    {
      title: "Complete Guide: Moving from Cloud AI to Self-Hosted AI Models",
      excerpt: "Step-by-step guide to deploy your own AI models locally, enhance data privacy, and create cost-effective AI solutions.",
      date: "2025-02-09",
      readTime: "8 min read",
      slug: "migrating-from-cloud-to-self-hosted",
      category: "Tutorial",
      featured: true
    },
    {
      title: "Why My Olive Grove Framework Is Changing AI Ethics",
      excerpt: "Exploring how agriculture-inspired thinking creates more sustainable and ethical AI deployment strategies.",
      date: "2025-01-15",
      readTime: "5 min read",
      slug: "olive-grove-framework-ai-ethics",
      category: "Ethics"
    },
    {
      title: "Privacy Audit Checklist: 10 Signs Your AI Setup Needs Security Updates",
      excerpt: "A comprehensive checklist to assess your current AI infrastructure and identify potential privacy vulnerabilities.",
      date: "2025-01-08",
      readTime: "7 min read",
      slug: "privacy-audit-checklist-ai",
      category: "Security"
    },
    {
      title: "From Marseille Startup to Global Self-Hosted AI Leader",
      excerpt: "Personal journey and lessons learned building an ethical AI consultancy in the heart of French innovation.",
      date: "2024-12-22",
      readTime: "4 min read",
      slug: "marseille-startup-to-global-ai",
      category: "Personal"
    },
    {
      title: "Cost Analysis: Why Self-Hosted AI Saves Money in the Long Run",
      excerpt: "Detailed financial breakdown showing how switching to self-hosted AI models reduces operational costs by up to 60%.",
      date: "2024-12-15",
      readTime: "6 min read",
      slug: "cost-analysis-self-hosted-ai",
      category: "Business"
    }
  ]

  return (
    <main>
      {/* Header */}
      <section style={{ padding: '3rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1>AI Self-Hosting Guide</h1>
          <p style={{ fontSize: '18px', marginTop: '1rem' }}>
            Practical guides and insights for running your own AI models, maintaining data privacy, and implementing ethical AI solutions
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Featured Tutorial</h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--golden-yellow)',
              margin: '1rem auto 2rem auto'
            }}></div>
          </div>

          {articles.filter(article => article.featured).map(article => (
            <article key={article.slug} style={{
              backgroundColor: 'var(--white)',
              padding: '3rem',
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              <div style={{ marginBottom: '2rem' }}>
                <span style={{
                  backgroundColor: 'var(--olive-green)',
                  color: 'var(--white)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  <i className="fas fa-book" style={{ marginRight: '0.5rem' }}></i>
                  {article.category}
                </span>
              </div>

              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--deep-blue)' }}>
                {article.title}
              </h2>

              <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                {article.excerpt}
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '14px', color: 'var(--text-color)' }}>
                <span><i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>{article.date}</span>
                <span><i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>{article.readTime}</span>
              </div>

              <Link
                href={`/blog/${article.slug}`}
                style={{
                  backgroundColor: 'var(--golden-yellow)',
                  color: 'var(--deep-blue)',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}
              >
                Read Full Tutorial <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Article List */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--deep-blue)' }}>
            Latest Articles
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {articles.filter(article => !article.featured).map(article => (
              <article key={article.slug} style={{
                backgroundColor: 'var(--light-gray)',
                padding: '2rem',
                borderRadius: '12px',
                border: '2px solid var(--golden-yellow)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }} className="article-card">
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{
                    backgroundColor: 'var(--olive-green)',
                    color: 'var(--white)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {article.category}
                  </span>
                </div>

                <h3 style={{ marginBottom: '1rem', color: 'var(--deep-blue)' }}>
                  {article.title}
                </h3>

                <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                  {article.excerpt}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--text-color)' }}>
                  <span><i className="fas fa-clock" style={{ marginRight: '0.3rem' }}></i>{article.readTime}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    style={{ color: 'var(--golden-yellow)', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Read More <i className="fas fa-arrow-right" style={{ marginLeft: '0.3rem', fontSize: '12px' }}></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Stay Updated with AI Self-Hosting Insights</h2>
          <p style={{ fontSize: '18px', marginTop: '1rem', marginBottom: '2rem' }}>
            Get weekly updates on the latest AI self-hosting developments and data privacy implementation strategies
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
              href="https://www.linkedin.com/in/alanbouo"
              style={{ backgroundColor: '#0077b5', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
              target="_blank"
            >
              <i className="fab fa-linkedin" style={{ marginRight: '0.5rem' }}></i>Follow on LinkedIn
            </Link>
            <Link
              href="https://twitter.com/alanbouo"
              style={{ backgroundColor: '#1da1f2', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}
              target="_blank"
            >
              <i className="fab fa-twitter" style={{ marginRight: '0.5rem' }}></i>Follow on X
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
