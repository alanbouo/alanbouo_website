import Link from 'next/link'

export const metadata = {
  title: 'Activities - Alanbouo\'s Tech Journey',
  description: 'Explore my work in web development, self-hosting, AI/ML, and open-source contributions. Comprehensive guides, tutorials, and insights.'
}

export default function ActivitiesPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My Tech Journey</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
            A collection of my work across different domains of technology
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Self-Hosting Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>Self-Hosting & DevOps</h2>
              </div>
              <div>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Building and managing my own infrastructure for better privacy, security, and cost control.
                  Everything from setting up servers to deploying applications in the cloud or on-premises.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/blog/migrating-from-cloud-to-self-hosted"
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Cloud Migration Guide
                  </Link>
                  <Link
                    href="/projects"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#28a745',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: '2px solid #28a745'
                    }}
                  >
                    <i className="fas fa-folder-open"></i>
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div style={{
            marginBottom: '4rem',
            backgroundColor: '#f8f9fa',
            padding: '3rem',
            borderRadius: '15px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Web Development</h2>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Creating modern, responsive web applications using the latest technologies.
                  From concept to deployment, I build applications that are fast, scalable, and user-friendly.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map(tech => (
                    <span key={tech} style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '14px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  See My Work <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-code" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
              </div>
            </div>
          </div>

          {/* AI & ML Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#6f42c1',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-brain" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>AI & Machine Learning</h2>
              </div>
              <div>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Exploring AI and ML with a focus on privacy, ethics, and practical applications.
                  Researching how to build responsible AI systems that respect user privacy and data sovereignty.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/blog/migrating-from-cloud-to-self-hosted"
                    style={{
                      backgroundColor: '#6f42c1',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-brain"></i>
                    AI Ethics Research
                  </Link>
                  <Link
                    href="/projects"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#6f42c1',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: '2px solid #6f42c1'
                    }}
                  >
                    <i className="fas fa-project-diagram"></i>
                    ML Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Open Source Section */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '3rem',
            borderRadius: '15px',
            border: '1px solid #e9ecef',
            marginBottom: '4rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <i className="fab fa-github" style={{ fontSize: '72px', color: '#333' }}></i>
              <h2 style={{ color: '#333', marginBottom: '1rem' }}>Open Source Contributions</h2>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Passionate about contributing to the open-source community and building tools that benefit everyone.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/alan-bouo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Recent Blog Posts
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link href="/blog/migrating-from-cloud-to-self-hosted" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <span style={{ backgroundColor: '#28a745', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  SELF-HOSTING
                </span>
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                Complete Guide: Migrating from Cloud AI to Self-Hosted Infrastructure
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Follow this comprehensive guide to migrate your AI workloads and reduce costs by up to 40%.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                color: '#999'
              }}>
                <span><i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>Feb 9, 2025</span>
                <span><i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>8 min read</span>
              </div>
            </Link>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              border: '1px solid #e9ecef',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <i className="fas fa-plus" style={{ fontSize: '48px', color: '#007bff', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>More Tutorials Coming Soon</h4>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Web development tips, DevOps guides, and AI insights on the way
              </p>
              <Link href="/blog" style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                alignSelf: 'center'
              }}>
                Explore All Posts
              </Link>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <span style={{ backgroundColor: '#6f42c1', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  AI/ML
                </span>
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Coming Soon</h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Deep dive into ethical AI practices and privacy-first machine learning.
              </p>
              <div style={{ fontSize: '14px', color: '#999' }}>
                <i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
