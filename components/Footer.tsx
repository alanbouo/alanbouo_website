'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      tabIndex={0}
      style={{
        backgroundColor: '#1a0a2e',
        color: '#d8d0e0',
        padding: '2rem 1rem',
        marginTop: '20px',
        width: '100%',
        position: 'relative',
        borderTop: '1px solid #6A1B9A'
      }}
    >
      {/* Footer Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', paddingBottom: '2rem' }}>

        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <h3 style={{ color: 'white' }}>Me suivre</h3>
            <p>IA & cybersécurité vulgarisées. YouTube pour approfondir, X et LinkedIn pour les à-côtés.</p>
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
            <h3 style={{ color: 'white' }}>Liens</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link href="/" className="footer-link">Accueil</Link></li>
              <li><Link href="/projects" className="footer-link">Produits</Link></li>
              <li><Link href="/blog" className="footer-link">Blog</Link></li>
              <li><Link href="/about" className="footer-link">À propos</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/privacy" className="footer-link">Confidentialité</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ color: 'white' }}>Newsletter</h3>
            <p>Reçois mes prochains articles directement par e-mail, sans algorithme entre nous.</p>
            <a
              href="https://substack.com/@alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                backgroundColor: '#ff6b35',
                color: 'white',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              S'inscrire sur Substack
            </a>
          </div>
        </div>
        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          borderTop: '1px solid #4a2a6a',
          paddingTop: '1rem',
          fontFamily: 'Roboto, sans-serif',
          fontSize: '14px'
        }}>
            <p style={{ color: '#c0b8cc', fontSize: '13px', lineHeight: '1.5' }}>&copy; 2026 Alan Bouo. Tous droits réservés. <em style={{ color: '#ffffff' }}>Rendre l'IA et la cybersécurité accessibles, un produit à la fois.</em></p>
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

        footer :global(.footer-link) {
          color: #d8d0e0;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        footer :global(.footer-link:hover) {
          color: #ff6b35;
        }

        footer:focus, footer:has(*:focus) {
          outline: 2px solid #ff6b35;
          outline-offset: 2px;
        }
      `}</style>
    </footer>
  )
}
