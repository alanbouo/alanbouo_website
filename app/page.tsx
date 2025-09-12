import Link from 'next/link'
import Image from 'next/image'
import AIEthicsQuiz from '@/components/AIEthicsQuiz'

export const metadata = {
  title: 'Alanbouo - Self-Hosted AI Consultant for Privacy & Control',
  description: 'Empowering businesses with self-hosted AI solutions for maximum privacy, data control, and cost efficiency. Expert consultation on cloud-to-self migration and AI ethics audits.'
}

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
            Empowering Businesses with<br />
            Self-Hosted AI for Privacy and Control
          </h1>
          <p style={{ fontSize: '1.3rem', opacity: 0.9, marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
            Transform your data sovereignty while reducing costs by up to 40%.
            Expert guidance on cloud-to-self migration and AI ethics.
          </p>

          <Link
            href="/contact"
            className="cta"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              display: 'inline-block',
              marginBottom: '2rem'
            }}
          >
            Book a Free AI Audit
          </Link>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            {[
              { icon: 'fas fa-code', text: 'Full-Stack Development' },
              { icon: 'fas fa-server', text: 'Self-Hosting & DevOps' },
              { icon: 'fas fa-brain', text: 'AI & Machine Learning' },
              { icon: 'fas fa-users', text: 'Open-Source Contributor' }
            ].map((skill, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                padding: '1rem',
                borderRadius: '10px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <i className={skill.icon} style={{ fontSize: '24px', marginBottom: '0.5rem' }}></i>
                <div>{skill.text}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '2rem'
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

            {/* Web Development Card */}
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
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-code" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Web Development</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Creating modern, responsive web applications with clean architecture and user-centric design.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#007bff', marginRight: '0.5rem' }}></i>
                    React & Next.js
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#007bff', marginRight: '0.5rem' }}></i>
                    TypeScript & Node.js
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#007bff', marginRight: '0.5rem' }}></i>
                    Modern UI/UX
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  href="/activities/webdev"
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
                  backgroundColor: '#6f42c1',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-brain" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI & Machine Learning</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Exploring AI and ML technologies with a focus on privacy, ethics, and practical applications.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6f42c1', marginRight: '0.5rem' }}></i>
                    Privacy-First AI
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6f42c1', marginRight: '0.5rem' }}></i>
                    Ethical ML Deployment
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-check" style={{ color: '#6f42c1', marginRight: '0.5rem' }}></i>
                    Self-Hosted Solutions
                  </li>
                </ul>
              </div>
              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Link
                  href="/activities/ai"
                  style={{
                    backgroundColor: '#6f42c1',
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link href="/blog/migrating-from-cloud-to-self-hosted" style={{
              backgroundColor: '#f8f9fa',
              padding: '2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '2px solid #e9ecef'
            }}>
              <div style={{ color: '#28a745', fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold' }}>
                SELF-HOSTING
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                Complete Guide: Migrating from Cloud AI to Self-Hosted Infrastructure
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Transform your data control while reducing cloud costs by up to 40%. Step-by-step guide for secure AI deployment.
              </p>
              <div style={{ fontSize: '14px', color: '#999' }}>
                <i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>
                February 9, 2025
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
              backgroundColor: 'white',
              color: '#667eea',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <i className="fas fa-envelope"></i>
              Get In Touch
            </Link>
            <a href="https://github.com/alan-bouo" style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '2px solid white'
            }}>
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
