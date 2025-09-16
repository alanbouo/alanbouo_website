'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link href="/" className="brand-link">
            <i className="fas fa-code" style={{ color: 'var(--olive-green)' }}></i>
            <span>Alan Bouo</span>
          </Link>

          <div className="desktop-menu">
            <ul className="desktop-menu-list">
              <li><Link href="/services" className="nav-link">Services</Link></li>
              <li><Link href="/blog" className="nav-link">Blog</Link></li>
              <li><Link href="/about" className="nav-link">About</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
            
            <div className="desktop-cta">
              <Link href="/contact" className="cta-button">Get in Touch</Link>
            </div>
          </div>

          <button 
            className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="mobile-menu" onClick={e => e.stopPropagation()}>
          <ul className="mobile-menu-list">
            <li><Link href="/services" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/blog" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        /* Base Styles */
        .navbar {
          background-color: var(--primary-blue);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        /* Brand Link */
        .brand-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .brand-link:hover {
          color: var(--golden-yellow);
          transform: translateY(-2px);
        }
        
        /* Desktop Menu */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .desktop-menu-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 1.5rem;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .nav-link:hover {
          color: var(--golden-yellow);
          background: rgba(255, 255, 255, 0.1);
        }
        
        /* CTA Button */
        .cta-button {
          background: var(--olive-green);
          color: var(--deep-blue);
          padding: 0.5rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .cta-button:hover {
          background: var(--golden-yellow);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }
        
        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 300px;
          background: var(--deep-blue);
          padding: 5rem 1.5rem 2rem;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1000;
        }
        
        .mobile-menu-overlay.open .mobile-menu {
          transform: translateX(0);
        }
        
        .mobile-menu-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .mobile-nav-link {
          color: white;
          text-decoration: none;
          padding: 0.8rem 1rem;
          display: block;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
          padding-left: 1.5rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }
          
          .desktop-cta {
            display: none;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-overlay {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
