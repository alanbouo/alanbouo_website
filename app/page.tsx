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
          background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
          padding: '6rem 1rem 4rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          width: '100%',
          overflowX: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          padding: '0 1rem',
          boxSizing: 'border-box'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3.5rem)', 
            marginBottom: '1rem', 
            lineHeight: '1.2',
            padding: '0 1rem'
          }}>
            AI Expertise<br />
            <span style={{ color: '#ff6b35' }}>Unleashed</span>
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.3rem)', 
            opacity: 0.9, 
            margin: '0 auto 3rem',
            maxWidth: '700px',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }}>
            Learn practical AI skills fast with clear tutorials and actionable strategies. Stay ahead in the field.
          </p>

          <Link
            href="/contact"
            style={{
              backgroundColor: '#FF9800',
              color: 'white',
              fontSize: '1.4rem',
              padding: '1.5rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '4rem',
              border: 'none',
              boxShadow: '0 8px 25px rgba(255, 152, 0, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            Ready to explore AI opportunities?
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
              { icon: 'database', text: 'Self-Hosting AI' },
              { icon: 'link', text: 'Multi-Chain Protocol' },
              { icon: 'shield', text: 'AI Ethics & Privacy' }
            ].map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {skill.icon === 'database' && (
                      <>
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                        <path d="M21 17c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                      </>
                    )}
                    {skill.icon === 'link' && (
                      <>
                        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </>
                    )}
                    {skill.icon === 'shield' && (
                      <>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </>
                    )}
                  </svg>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>{skill.text}</div>
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
              <div style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2 4h6a2 2 0 0 1 2 2v10z"/>
                </svg>
              </div>
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
              <div style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              About Me
            </Link>
          </div>
        </div>
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
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(40, 167, 69, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
                    <line x1="6" y1="18" x2="6" y2="18"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Self-Hosting & DevOps</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Building and deploying applications on personal infrastructure for better control,
                  security, and cost efficiency.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    Docker & Kubernetes
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    Cloud-Native Architecture
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#28a745',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
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
                  background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(108, 117, 125, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/>
                    <line x1="8" y1="12" x2="16" y2="12"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Multi-Chain Protocol (MCP)</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Highlights your expertise in leveraging decentralized AI protocols to enhance self-hosted solutions, enabling secure, scalable, and interoperable AI systems across multiple chains or networks.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#6c757d',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    Decentralized Protocols
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#6c757d',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    Cross-Chain Interoperability
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#6c757d',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
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
                  background: 'linear-gradient(135deg, #8b2e8b 0%, #6f1e6f 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(139, 46, 139, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI Ethics and Privacy</h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Builds on data privacy and ethical AI practices, focusing on developing trustworthy, compliant AI systems that prioritize user consent and fairness, complementing the decentralized nature of MCP.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #e9ecef', paddingTop: '1.5rem' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#8b2e8b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    User Consent & Fairness
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#8b2e8b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    Ethical Compliance
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: '#8b2e8b',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.5rem',
                      flexShrink: 0
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
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
                color: 'white'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-3.08-3.08 2.5 2.5 0 0 1 2.96-3.08A2.5 2.5 0 0 1 9.5 2Z"/>
                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 3.08-3.08 2.5 2.5 0 0 0-2.96-3.08A2.5 2.5 0 0 0 14.5 2Z"/>
                  </svg>
                </div>
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
                <div style={{ fontSize: '14px', color: '#999', display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
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
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)'
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
              </div>
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
              backgroundColor: '#FF9800',
              color: 'white',
              padding: '1.5rem 2.5rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.5-3 3.5-3 5.5s1.5 4 3 5.5c1.5-1.5 3-3.5 3-5.5s-1.5-4-3-5.5z"/>
                  <path d="M19.5 7.5c1.5-1.5 3-3.5 3-5.5s-1.5-4-3-5.5c-1.5 1.5-3 3.5-3 5.5s1.5 4 3 5.5z"/>
                  <path d="M12 12c-1.5-1.5-3-3.5-3-5.5s1.5-4 3-5.5c1.5 1.5 3 3.5 3 5.5s-1.5 4-3 5.5z"/>
                  <path d="M12 12c1.5 1.5 3 3.5 3 5.5s-1.5 4-3 5.5c-1.5-1.5-3-3.5-3-5.5s1.5-4 3-5.5z"/>
                  <line x1="12" y1="2" x2="12" y2="22"/>
                </svg>
              </div>
              Ready to explore AI opportunities?
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
