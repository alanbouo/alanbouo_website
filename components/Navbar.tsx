'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{ backgroundColor: 'var(--deep-blue)', padding: '1rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ textDecoration: 'none', fontFamily: 'Pacifico', fontSize: '24px', color: 'var(--olive-green)' }}>
          <i className="fas fa-leaf" style={{ marginRight: '0.5rem' }}></i>
          Alanbouo
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', color: 'var(--white)', fontSize: '24px' }}
          className="mobile-menu-toggle"
          aria-label="Toggle navigation menu"
        >
          <i className="fas fa-bars"></i>
        </button>

        <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem' }}>
          <li><Link href="/" className="nav-link">Home</Link></li>
          <li><Link href="/services" className="nav-link">Services</Link></li>
          <li><Link href="/blog" className="nav-link">Blog</Link></li>
          <li><Link href="/about" className="nav-link">About</Link></li>
          <li><Link href="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>

      {isOpen && (
        <div style={{ display: 'none', backgroundColor: 'var(--deep-blue)', padding: '1rem' }} className="mobile-menu">
          <ul style={{ listStyle: 'none' }}>
            <li><Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/services" className="nav-link" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle { display: block !important; }
          ul { display: none !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
