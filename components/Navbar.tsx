'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      backgroundColor: 'var(--deep-blue)',
      padding: '1rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link
          href="/"
          style={{
            textDecoration: 'none',
            fontFamily: 'Pacifico',
            fontSize: '24px',
            color: 'var(--olive-green)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          className="brand-link hover-glow"
          aria-label="Alanbouo - Home"
        >
          <i className="fas fa-leaf"></i>
          Alanbouo
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid var(--olive-green)',
            borderRadius: '5px',
            color: 'var(--white)',
            fontSize: '20px',
            padding: '8px 12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          className="mobile-menu-toggle hover-glow"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1.5rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link href="/" className="nav-link hover-glow" aria-label="Home page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/activities" className="nav-link hover-glow" aria-label="Activities page">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link hover-glow" aria-label="Blog page">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link hover-glow" aria-label="About page">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link hover-glow" aria-label="Contact page">
                Contact
              </Link>
            </li>
          </ul>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginLeft: '1rem',
            paddingLeft: '1rem',
            borderLeft: '1px solid var(--olive-green)'
          }}>
            <a
              href="https://youtube.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Follow Alanbouo on YouTube"
              style={{
                color: 'var(--olive-green)',
                textDecoration: 'none',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://linkedin.com/in/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Connect with Alanbouo on LinkedIn"
              style={{
                color: 'var(--olive-green)',
                textDecoration: 'none',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Follow Alanbouo on X/Twitter"
              style={{
                color: 'var(--olive-green)',
                textDecoration: 'none',
                fontSize: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          style={{
            display: 'none',
            backgroundColor: 'var(--deep-blue)',
            padding: '1rem',
            borderTop: '1px solid var(--olive-green)',
            animation: 'slideDown 0.3s ease'
          }}
          className="mobile-menu"
        >
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <li>
              <Link
                href="/"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Home page"
              >
                <i className="fas fa-home" style={{ marginRight: '1rem', width: '20px' }}></i>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/activities"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Activities page"
              >
                <i className="fas fa-tools" style={{ marginRight: '1rem', width: '20px' }}></i>
                Activities
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Blog page"
              >
                <i className="fas fa-blog" style={{ marginRight: '1rem', width: '20px' }}></i>
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="About page"
              >
                <i className="fas fa-user" style={{ marginRight: '1rem', width: '20px' }}></i>
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Contact page"
              >
                <i className="fas fa-envelope" style={{ marginRight: '1rem', width: '20px' }}></i>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
        /* Keep existing hover styles */
        .nav-link {
          color: var(--white);
          text-decoration: none;
          padding: 0.5rem 1rem;
          borderRadius: 5px;
          transition: all 0.3s ease;
          display: block;
        }

        .nav-link:hover, .brand-link:hover {
          color: var(--golden-yellow);
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(218, 165, 32, 0.6);
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(218, 165, 32, 0.8);
          transform: scale(1.05);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }
          ul {
            display: none !important;
          }
          .mobile-menu {
            display: block !important;
          }
          .mobile-menu ul {
            flex-direction: column;
            align-items: stretch;
          }
          .mobile-menu .nav-link {
            padding: 1rem;
            border-bottom: 1px solid rgba(218, 165, 32, 0.2);
          }
        }

        @media (max-width: 480px) {
          .brand-link {
            font-size: 20px !important;
          }
          .nav-link {
            padding: 0.75rem !important;
            font-size: 14px;
          }
        }
      `}</style>
    </nav>
  )
}
