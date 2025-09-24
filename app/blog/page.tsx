import Link from 'next/link'
// Temporarily using hardcoded data until contentlayer is properly configured
// import { allBlogs } from 'contentlayer/generated'
// import { compareDesc } from 'date-fns'

export const metadata = {
  title: 'Blog - Alanbouo | AI Self-Hosting Guide',
  description: 'Latest insights and practical guides on self-hosting AI models, data privacy management, and ethical AI deployment.',
}

const categoryColors = {
  Tutorial: "#28a745",
  Ethics: "#667eea",
  Security: "#8b5cf6",
  Personal: "#28a745",
  Business: "#667eea"
}

// Temporary hardcoded posts - will be replaced with contentlayer data
const posts = [
  {
    title: "Complete Guide: Moving from Cloud AI to Self-Hosted AI Models",
    description: "Step-by-step guide to deploy your own AI models locally, enhance data privacy, and create cost-effective AI solutions.",
    date: "2025-02-09",
    slug: "migrating-from-cloud-to-self-hosted",
    category: "Tutorial",
    featured: true,
    readingTime: 8
  },
  {
    title: "Why My Olive Grove Framework Is Changing AI Ethics",
    description: "Exploring how agriculture-inspired thinking creates more sustainable and ethical AI deployment strategies.",
    date: "2025-01-15",
    slug: "olive-grove-framework-ai-ethics",
    category: "Ethics",
    featured: false,
    readingTime: 5
  },
  {
    title: "Privacy Audit Checklist: 10 Signs Your AI Setup Needs Security Updates",
    description: "A comprehensive checklist to assess your current AI infrastructure and identify potential privacy vulnerabilities.",
    date: "2025-01-08",
    slug: "privacy-audit-checklist-ai",
    category: "Security",
    featured: false,
    readingTime: 7
  },
  {
    title: "From Marseille Startup to Global Self-Hosted AI Leader",
    description: "Personal journey and lessons learned building an ethical AI consultancy in the heart of French innovation.",
    date: "2024-12-22",
    slug: "marseille-startup-to-global-ai",
    category: "Personal",
    featured: false,
    readingTime: 4
  },
  {
    title: "Cost Analysis: Why Self-Hosted AI Saves Money in the Long Run",
    description: "Detailed financial breakdown showing how switching to self-hosted AI models reduces operational costs by up to 60%.",
    date: "2024-12-15",
    slug: "cost-analysis-self-hosted-ai",
    category: "Business",
    featured: false,
    readingTime: 6
  }
]

export default function BlogPage() {
  // Temporarily using hardcoded data
  // const posts = allBlogs
  //   .filter((post) => !post.draft)
  //   .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  // Get unique categories with counts
  const categoryCounts = posts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const categories = Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    count
  }))

  const recentPosts = posts.slice(0, 3)

  return (
    <main>
        {/* Header */}
        <section className="blog-header" style={{ padding: '3rem 1rem', background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)', color: 'var(--white)', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1>AI Knowledge Hub</h1>
            <p style={{ fontSize: '18px', marginTop: '1rem' }}>
              Discover practical tips, trends, and solutions to empower your AI journey. Stay informed.
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

                {featuredPost && (
                  <article key={featuredPost.slug} className="blog-featured-article" style={{
                    backgroundColor: 'var(--white)',
                    padding: '3rem',
                    borderRadius: '15px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    border: `3px solid ${categoryColors[featuredPost.category as keyof typeof categoryColors] || '#28a745'}`
                  }}>
                    <div style={{ marginBottom: '2rem' }}>
                      <span style={{
                        backgroundColor: categoryColors[featuredPost.category as keyof typeof categoryColors] || '#28a745',
                        color: 'var(--white)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        <i className="fas fa-book" style={{ marginRight: '0.5rem' }}></i>
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="blog-featured-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>
                      {featuredPost.title}
                    </h2>

                    <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem auto' }}>
                      {featuredPost.description}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '14px', color: 'var(--text-color)' }}>
                      <span><i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <span><i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>{featuredPost.readingTime} min read</span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      style={{
                        backgroundColor: '#FF9800',
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
                )}
              </div>

              {/* Article Grid */}
              <div>
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-blue)' }}>
                  Latest Articles
                </h2>

                <div className="blog-article-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                  {regularPosts.map(post => (
                    <article key={post.slug} className="blog-article-card article-card" style={{
                      backgroundColor: 'var(--white)',
                      padding: '2rem',
                      borderRadius: '12px',
                      border: `3px solid ${categoryColors[post.category as keyof typeof categoryColors] || '#28a745'}`,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <span style={{
                          backgroundColor: categoryColors[post.category as keyof typeof categoryColors] || '#28a745',
                          color: 'var(--white)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '12px',
                          fontWeight: 'bold'
                        }}>
                          {post.category}
                        </span>
                      </div>

                      <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>
                        {post.title}
                      </h3>

                      <p style={{ lineHeight: '1.6', marginBottom: '1.5rem', color: 'var(--text-color)' }}>
                        {post.description}
                      </p>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--text-color)' }}>
                        <span><i className="fas fa-clock" style={{ marginRight: '0.3rem' }}></i>{post.readingTime} min read</span>
                        <Link
                          href={`/blog/${post.slug}`}
                          style={{ color: '#FF9800', textDecoration: 'none', fontWeight: 'bold' }}
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
                          {new Date(post.date).toLocaleDateString()}
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
            <h2 style={{ marginBottom: '1rem' }}>Ready to explore AI opportunities?</h2>
            <p style={{ fontSize: '18px', marginBottom: '2rem' }}>
              Ready to harness the power of self-hosted AI for your business? Let's discuss how we can transform your operations.
            </p>
            <Link
              href="/contact"
              className="blog-cta-button"
              style={{
                backgroundColor: '#FF9800',
                color: 'var(--white)',
                padding: '1.5rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 25px rgba(255, 152, 0, 0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-rocket"></i>
              Get Started Now
            </Link>
          </div>
        </section>
      {/* Footer rendered by layout */}
     </main>
   )
 }
