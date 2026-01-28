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
            I build & ship<br />
            <span style={{ color: '#ff6b35' }}>AI products</span>
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 4vw, 1.3rem)', 
            opacity: 0.9, 
            margin: '0 auto 3rem',
            maxWidth: '700px',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }}>
            I’m Alan — an AI dev building products end-to-end (build → launch → marketing) and sharing what I learn as I grow an audience.
          </p>

          <Link
            href="/projects"
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
            See My Products
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
              { icon: 'database', text: '4 Products Shipped' },
              { icon: 'link', text: 'Build → Launch → Market' },
              { icon: 'shield', text: 'Building in Public' }
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
            <a
              href="https://x.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
            Products I've Built
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666', maxWidth: '600px', margin: '0 auto 3rem' }}>
            A few things I’ve built while learning what actually works (product + distribution).
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* TubeChatAI */}
            <a href="https://tubechatai.xyz" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #FF0000',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>TubeChatAI</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Chat with any YouTube video — ask questions, get clarifications, dive deeper into content in real time.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>YouTube</span>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>LLM</span>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Learning</span>
              </div>
            </a>

            {/* MemoMind */}
            <a href="https://memomind.space" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #667eea',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>MemoMind</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Chat with your voice memos. Extract insights, organize ideas, turn recordings into actionable knowledge.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Voice AI</span>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Notes</span>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Productivity</span>
              </div>
            </a>

            {/* VibeX */}
            <a href="https://vibx.space" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #1DA1F2',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8ecf 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>VibeX</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  AI-powered growth tool for X. Smart content suggestions, analytics, and optimization to grow your audience.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#f0f9ff', color: '#1DA1F2', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>X/Twitter</span>
                <span style={{ backgroundColor: '#f0f9ff', color: '#1DA1F2', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Growth</span>
                <span style={{ backgroundColor: '#f0f9ff', color: '#1DA1F2', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Analytics</span>
              </div>
            </a>

            {/* VigilAI */}
            <a href="https://vigilai.watch" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #8b2e8b',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>VigilAI</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Monitor your brand across AI assistants like ChatGPT & Claude. Visibility scores, sentiment, competitor analysis.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Brand Monitoring</span>
                <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>AI Visibility</span>
              </div>
            </a>
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
                A practical guide to moving from hosted LLM APIs to self-hosted models: architecture, tradeoffs, costs, and pitfalls.
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
          <h2 style={{ marginBottom: '1rem' }}>Building in public</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            I share what I’m shipping, what’s working in marketing, and what’s not — in real time.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="https://x.com/alanbouo" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: '#FF9800',
              color: 'white',
              padding: '1.25rem 2.25rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.15rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)',
              transition: 'all 0.3s ease'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </span>
              Follow the builds on X
            </a>

            <Link href="/contact" style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '1.25rem 2.25rem',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.15rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '2px solid rgba(255,255,255,0.9)',
              transition: 'all 0.3s ease'
            }}>
              Say hi
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
