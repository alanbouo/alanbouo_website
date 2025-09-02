'use client'

import Link from 'next/link'

export default function Footer() {
  const handleNewsletter = (e: any) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <footer style={{
      backgroundColor: 'var(--deep-blue)',
      color: 'var(--light-gray)',
      padding: '2rem 0',
      marginTop: 'auto',
      width: '100%',
      zIndex: 100
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <h3>Follow Me</h3>
            <p>Stay connected for latest insights on self-hosted AI.</p>
            <div style={{ margin: '1rem 0' }}>
              <a href="https://youtube.com/alanbouo" className="social-icon" aria-label="YouTube tutorials" title="Watch AI tutorials">
                <i className="fab fa-youtube" style={{ color: 'var(--olive-green)', fontSize: '24px', margin: '0 0.3rem', transition: 'all 0.3s ease' }}></i>
                <span style={{ color: 'var(--olive-green)', fontSize: '12px', marginLeft: '0.2rem' }}>Tutorials</span>
              </a>
              <br />
              <a href="https://twitter.com/alanbouo" className="social-icon" aria-label="X threads discussion" title="Join AI ethics discussions">
                <i className="fab fa-twitter" style={{ color: 'var(--olive-green)', fontSize: '24px', margin: '0 0.3rem', marginTop: '1rem', transition: 'all 0.3s ease' }}></i>
                <span style={{ color: 'var(--olive-green)', fontSize: '12px', marginLeft: '0.2rem' }}>X Threads</span>
              </a>
              <br />
              <a href="https://linkedin.com/in/alanbouo" className="social-icon" aria-label="LinkedIn articles" title="Read professional insights">
                <i className="fab fa-linkedin" style={{ color: 'var(--olive-green)', fontSize: '24px', margin: '0 0.3rem', marginTop: '1rem', transition: 'all 0.3s ease' }}></i>
                <span style={{ color: 'var(--olive-green)', fontSize: '12px', marginLeft: '0.2rem' }}>Articles</span>
              </a>
            </div>
          </div>
          <div>
            <h3>Links</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/privacy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3>Newsletter</h3>
            <p>Get updates on self-hosted AI ethics.</p>
            <form onSubmit={handleNewsletter} style={{ marginTop: '1rem' }}>
              <input
                type="email"
                placeholder="Your email"
                required
                style={{ padding: '0.5rem', marginBottom: '0.5rem', width: '100%', borderRadius: '3px', border: 'none' }}
                aria-label="Email for newsletter"
              />
              <button type="submit" className="cta" style={{ padding: '0.5rem 1rem' }}>Subscribe</button>
            </form>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem', borderTop: '1px solid var(--olive-green)', paddingTop: '1rem' }}>
          <p>&copy; 2025 Alanbouo. All rights reserved. <em>Empowering ethical AI growth, one olive seed at a time.</em></p>
        </div>
      </div>
    </footer>
  )
}
