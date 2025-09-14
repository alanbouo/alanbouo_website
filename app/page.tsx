'use client'

'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundColor: 'var(--primary-blue)',
          padding: '4rem 2rem',
          textAlign: 'center',
          color: 'white',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        <div style={{ zIndex: 2, maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>
            AI Expertise<br />
            <span style={{ color: '#ff6b35' }}>Unleashed</span>
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Learn practical AI skills fast with clear tutorials and actionable strategies. Stay ahead in the field.
          </p>

          <Link
            href="/contact"
            style={{
              backgroundColor: '#ff6b35',
              color: 'white',
              fontSize: '1.4rem',
              padding: '1.5rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '4rem',
              border: 'none',
              boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            Grow Your Business with AI Today
          </Link>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem'
          }}>
            {[
              { icon: 'fas fa-server', text: 'Self-Hosting AI' },
              { icon: 'fab fa-ethereum', text: 'Multi-Chain Protocol' },
              { icon: 'fas fa-shield-alt', text: 'AI Ethics & Privacy' }
            ].map((skill, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                padding: '1.5rem',
                borderRadius: '15px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease'
              }}>
                <i className={skill.icon} style={{ fontSize: '32px', marginBottom: '1rem' }}></i>
                <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{skill.text}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '4rem'
          }}>
            <Link
              href="/projects"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-folder-open"></i>
              View My Work
            </Link>
            <Link
              href="/about"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-user"></i>
              About Me
            </Link>
          </div>
        </div>

        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 20%, white 2%, transparent 2%),
            radial-gradient(circle at 80% 80%, white 1.5%, transparent 1.5%),
            radial-gradient(circle at 40% 60%, white 1%, transparent 1%)
          `,
          backgroundSize: '100px 100px, 80px 80px, 120px 120px'
        }}></div>
      </section>

      {/* Activities Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            What I'm Working On
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* Self-Hosting Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #e9ecef'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Self-Hosting & DevOps</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Building and deploying applications on personal infrastructure for better control,
                  security, and cost efficiency.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
                    Docker & Kubernetes
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
                    Cloud-Native Architecture
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#28a745', marginRight: '0.5rem' }}></i>
                    Security & Privacy
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  href="/activities/self-hosting"
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Multi-Chain Protocol (MCP) Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #e9ecef'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#6c757d',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fab fa-ethereum" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Multi-Chain Protocol (MCP)</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Highlights your expertise in leveraging decentralized AI protocols to enhance self-hosted solutions, enabling secure, scalable, and interoperable AI systems across multiple chains or networks.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6c757d', marginRight: '0.5rem' }}></i>
                    Decentralized Protocols
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6c757d', marginRight: '0.5rem' }}></i>
                    Cross-Chain Interoperability
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6c757d', marginRight: '0.5rem' }}></i>
                    Secure AI Networks
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  href="/activities/mcp"
                  style={{
                    backgroundColor: '#6c757d',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* AI & ML Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #e9ecef'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#8b2e8b',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-shield-alt" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI Ethics and Privacy</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Builds on data privacy and ethical AI practices, focusing on developing trustworthy, compliant AI systems that prioritize user consent and fairness, complementing the decentralized nature of MCP.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#8b2e8b', marginRight: '0.5rem' }}></i>
                    User Consent & Fairness
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#8b2e8b', marginRight: '0.5rem' }}></i>
                    Ethical Compliance
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#8b2e8b', marginRight: '0.5rem' }}></i>
                    Privacy-First Development
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  href="/activities/ethics"
                  style={{
                    backgroundColor: '#8b2e8b',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Latest from My Blog
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            <Link href="/blog/migrating-from-cloud-to-self-hosted" style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid #e9ecef',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {/* Blog Post Thumbnail */}
              <div style={{
                width: '100%',
                height: '120px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '48px'
              }}>
                <i className="fas fa-brain"></i>
              </div>
              <div style={{ color: '#28a745', fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>
                SELF-HOSTING
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                Complete Guide: Migrating from Cloud AI to Self-Hosted Infrastructure
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Discover the latest AI innovations transforming businesses: from advanced machine learning to next-generation intelligent assistants.
              </p>
                <div style={{ fontSize: '14px', color: '#999' }}>
                  <i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>
                  September 14, 2025
                </div>
            </Link>

            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '10px',
              border: '2px solid #e9ecef',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <i className="fas fa-plus" style={{ fontSize: '48px', color: '#007bff', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>More Coming Soon</h4>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Exciting new tutorials and insights on web development, DevOps, and AI
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
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Interested in collaborating? Have questions about my work? I'd love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="/contact" style={{
              backgroundColor: '#ff6b35',
              color: 'white',
              padding: '1.5rem 2.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 20px rgba(255, 107, 53, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <i className="fas fa-rocket" style={{ fontSize: '1.3rem' }}></i>
              Grow Your Business with AI Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
