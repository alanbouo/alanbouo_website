'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      backgroundColor: 'var(--primary-blue)',
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
            fontSize: '24px',
            color: 'var(--tech-green)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          className="brand-link hover-glow"
          aria-label="Alanbouo - Home"
        >
          <i className="fa-solid fa-code"></i>
          Alan Bouo
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '2px solid var(--tech-green)',
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
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
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
              <Link href="/services" className="nav-link hover-glow" aria-label="Services page">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link hover-glow" aria-label="Blog page">
                <i className="fa-solid fa-blog" style={{ marginRight: '0.5rem' }}></i>
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

          {/* CTA Button */}
          <Link href="/contact" style={{
            backgroundColor: '#ff6b35',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
            transition: 'all 0.3s ease',
            transform: 'scale(1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 53, 0.4)';
          }}
          >
            <i className="fa-solid fa-rocket" style={{ fontSize: '0.9rem' }}></i>
            Grow with AI now
          </Link>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
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
                backgroundColor: 'white',
                color: '#ff0000',
                textDecoration: 'none',
                fontSize: '22px',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
              }}
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://linkedin.com/in/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Connect with Alanbouo on LinkedIn"
              style={{
                backgroundColor: 'white',
                color: '#0077b5',
                textDecoration: 'none',
                fontSize: '22px',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
              }}
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Follow Alanbouo on X/Twitter"
              style={{
                backgroundColor: 'white',
                color: '#1da1f2',
                textDecoration: 'none',
                fontSize: '22px',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
              }}
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://github.com/alan-bouo"
              target="_blank"
              rel="noopener noreferrer"
              className="social-nav-link"
              aria-label="Visit Alanbouo's GitHub profile"
              style={{
                backgroundColor: 'white',
                color: '#333',
                textDecoration: 'none',
                fontSize: '22px',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 3px 12px rgba(0,0,0,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
              }}
            >
              <i className="fa-brands fa-github"></i>
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
                href="/services"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Services page"
              >
                <i className="fa-solid fa-tools" style={{ marginRight: '1rem', width: '20px' }}></i>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="nav-link hover-glow"
                onClick={() => setIsOpen(false)}
                aria-label="Blog page"
              >
                <i className="fa-solid fa-blog" style={{ marginRight: '1rem', width: '20px' }}></i>
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
                <i className="fa-solid fa-user" style={{ marginRight: '1rem', width: '20px' }}></i>
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
                <i className="fa-solid fa-envelope" style={{ marginRight: '1rem', width: '20px' }}></i>
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
          /* Hide CTA button on mobile */
          .mobile-menu-toggle + div + div a[href*="/contact"][style*="backgroundColor"] {
            display: none !important;
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
