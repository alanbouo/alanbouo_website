import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      featured: true,
      color: "#28a745"
    },
    {
      title: "Why My Olive Grove Framework Is Changing AI Ethics",
      excerpt: "Exploring how agriculture-inspired thinking creates more sustainable and ethical AI deployment strategies.",
      date: "2025-01-15",
      readTime: "5 min read",
      slug: "olive-grove-framework-ai-ethics",
      category: "Ethics",
      color: "#667eea"
    },
    {
      title: "Privacy Audit Checklist: 10 Signs Your AI Setup Needs Security Updates",
      excerpt: "A comprehensive checklist to assess your current AI infrastructure and identify potential privacy vulnerabilities.",
      date: "2025-01-08",
      readTime: "7 min read",
      slug: "privacy-audit-checklist-ai",
      category: "Security",
      color: "#8b5cf6"
    },
    {
      title: "From Marseille Startup to Global Self-Hosted AI Leader",
      excerpt: "Personal journey and lessons learned building an ethical AI consultancy in the heart of French innovation.",
      date: "2024-12-22",
      readTime: "4 min read",
      slug: "marseille-startup-to-global-ai",
      category: "Personal",
      color: "#28a745"
    },
    {
      title: "Cost Analysis: Why Self-Hosted AI Saves Money in the Long Run",
      excerpt: "Detailed financial breakdown showing how switching to self-hosted AI models reduces operational costs by up to 60%.",
      date: "2024-12-15",
      readTime: "6 min read",
      slug: "cost-analysis-self-hosted-ai",
      category: "Business",
      color: "#667eea"
    }
  ]

  const categories = [
    { name: "AI Trends", count: 12 },
    { name: "Tutorials", count: 8 },
    { name: "Ethics", count: 6 },
    { name: "Security", count: 4 },
    { name: "Business", count: 3 }
  ]

  const recentPosts = articles.slice(0, 3)

  return (
    <main>
        {/* Header */}
        <section className="blog-header" style={{ padding: '3rem 1rem', backgroundColor: 'var(--primary-blue)', color: 'var(--white)', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>AI Self-Hosting Guide</h1>
            <p style={{ fontSize: '18px', marginTop: '1rem' }}>
              Practical guides and insights for running your own AI models, maintaining data privacy, and implementing ethical AI solutions
            </p>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <section className="blog-main-section" style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
          <div className="blog-main-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>

            {/* Main Content */}
            <div className="blog-main-content">
              {/* Featured Article */}
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2>Featured Tutorial</h2>
                  <div style={{
                    width: '60px',
                    height: '4px',
                    backgroundColor: 'var(--cta-yellow)',
                    margin: '1rem auto 2rem auto'
                  }}></div>
                </div>

                {articles.filter(article => article.featured).map(article => (
                  <article key={article.slug} className="blog-featured-article" style={{
                    backgroundColor: 'var(--white)',
                    padding: '3rem',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    border: `3px solid ${article.color}`
                  }}>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{
                        backgroundColor: article.color,
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

                    <h2 className="blog-featured-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>
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
                        backgroundColor: '#ff6b35',
                        color: 'var(--white)',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        display: 'inline-block'
                      }}
                    >
                      Read More <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                    </Link>
                  </article>
                ))}
              </div>

              {/* Article Grid */}
              <div>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-blue)' }}>
                  Latest Articles
                </h2>

                <div className="blog-article-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                  {articles.filter(article => !article.featured).map(article => (
                    <article key={article.slug} className="blog-article-card article-card" style={{
                      backgroundColor: 'var(--white)',
                      padding: '2rem',
                      borderRadius: '12px',
                      border: `3px solid ${article.color}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <span style={{
                          backgroundColor: article.color,
                          color: 'var(--white)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {article.category}
                        </span>
                      </div>

                      <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>
                        {article.title}
                      </h3>

                      <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                        {article.excerpt}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--text-color)' }}>
                        <span><i className="fas fa-clock" style={{ marginRight: '0.3rem' }}></i>{article.readTime}</span>
                        <Link
                          href={`/blog/${article.slug}`}
                          style={{ color: '#ff6b35', textDecoration: 'none', fontWeight: 'bold' }}
                        >
                          Read More <i className="fas fa-arrow-right" style={{ marginLeft: '0.3rem', fontSize: '12px' }}></i>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar" style={{ backgroundColor: 'var(--light-gray)', padding: '2rem', borderRadius: '12px', height: 'fit-content' }}>
              {/* Search Bar */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Search</h3>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      fontSize: '14px'
                    }}
                  />
                  <i className="fas fa-search" style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999'
                  }}></i>
                </div>
              </div>

              {/* Categories */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Categories</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {categories.map((category, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      <Link
                        href="#"
                        style={{
                          color: 'var(--text-color)',
                          textDecoration: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '0.5rem 0',
                          borderRadius: '4px',
                          transition: 'background-color 0.3s ease'
                        }}
                        className="category-link"
                      >
                        <span>{category.name}</span>
                        <span style={{ color: '#999', fontSize: '12px' }}>({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Recent Posts</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {recentPosts.map((post, index) => (
                    <li key={index} style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: index < recentPosts.length - 1 ? '1px solid #eee' : 'none' }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{
                          color: 'var(--text-color)',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        <h4 style={{ fontSize: '14px', marginBottom: '0.5rem', lineHeight: '1.4' }}>
                          {post.title}
                        </h4>
                        <span style={{ fontSize: '12px', color: '#999' }}>
                          <i className="fas fa-calendar" style={{ marginRight: '0.3rem' }}></i>
                          {post.date}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* CTA Section */}
        <section className="blog-cta-section" style={{
          padding: '4rem 1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'var(--white)',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Grow Your Business with AI Today</h2>
            <p style={{ fontSize: '18px', marginBottom: '2rem' }}>
              Ready to harness the power of self-hosted AI for your business? Let's discuss how we can transform your operations.
            </p>
            <Link
              href="/contact"
              className="blog-cta-button"
              style={{
                backgroundColor: '#ff6b35',
                color: 'var(--white)',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-rocket"></i>
              Get Started Now
            </Link>
          </div>
        </section>
      <Footer />
    </main>
  )
}
