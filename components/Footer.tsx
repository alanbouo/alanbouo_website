'use client'

import Link from 'next/link'

export default function Footer() {
  const handleNewsletter = (e: any) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <footer
      tabIndex={0}
      style={{
        backgroundColor: 'var(--deep-blue)',
        color: 'var(--light-gray)',
        padding: '2rem 1rem',
        marginTop: '20px',
        width: '100%',
        position: 'relative',
        borderTop: '1px solid #556B2F'
      }}
    >
      {/* Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '2rem' }}>



        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <h3>Follow Me</h3>
            <p>Stay updated with the latest on AI innovations.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1rem 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a href="https://www.youtube.com/@alanbouo" className="social-icon" aria-label="YouTube tutorials"
                   style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <i className="fa-brands fa-youtube" style={{ color: '#ff0000', fontSize: '18px' }}></i>
                </a>
                <Link href="https://www.youtube.com/@alanbouo" className="footer-link">Youtube</Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a href="https://x.com/alanbouo" className="social-icon" aria-label="X threads discussion"
                   style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <i className="fa-brands fa-x-twitter" style={{ color: '#1da1f2', fontSize: '18px' }}></i>
                </a>
                <Link href="https://x.com/alanbouo" className="footer-link">X</Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a href="https://linkedin.com/in/alanbouo" className="social-icon" aria-label="LinkedIn articles"
                   style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <i className="fa-brands fa-linkedin" style={{ color: '#0077b5', fontSize: '18px' }}></i>
                </a>
                <Link href="https://linkedin.com/in/alanbouo" className="footer-link">LinkedIn</Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <a href="https://github.com/alanbouo" className="social-icon" aria-label="GitHub repository"
                   style={{ backgroundColor: 'white', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  <i className="fa-brands fa-github" style={{ color: '#333', fontSize: '18px' }}></i>
                </a>
                <Link href="https://github.com/alanbouo" className="footer-link">GitHub</Link>
              </div>
            </div>
          </div>
          <div>
            <h3>Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link href="/" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>Home</Link></li>
              <li><Link href="/projects" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>Projects</Link></li>
              <li><Link href="/blog" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>Blog</Link></li>
              <li><Link href="/about" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>About</Link></li>
              <li><Link href="/contact" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>Contact</Link></li>
              <li><Link href="/privacy" className="footer-link" style={{padding: '1px', borderRadius: '10%', display: 'flex', alignItems: 'center', justifyContent: 'left' }}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Subscribe for latest insights on AI.</p>
            <form onSubmit={handleNewsletter} style={{ marginTop: '1rem' }}>
              <input
                type="email"
                placeholder="Your email"
                required
                style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%', borderRadius: '3px', border: 'none' }}
                aria-label="Email for newsletter"
              />
              <button type="submit" style={{ backgroundColor: '#ff6b35', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          borderTop: '1px solid var(--olive-green)',
          paddingTop: '1rem',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px'
        }}>
            <p style={{ color: '#e0e0e0', fontSize: '13px', lineHeight: '1.5' }}>&copy; 2025 Alan Bouo. All rights reserved. <em style={{ color: '#ffffff' }}>Building AI products — and sharing the journey in public.</em></p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            padding: 10px !important;
            display: flex !important;
            flex-direction: column !important;
          }

          footer > div {
            padding-bottom: 1rem !important;
          }
        }

        footer {
          outline: none;
        }

        footer:focus, footer:has(*:focus) {
          outline: 2px solid var(--golden-yellow);
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  )
}
