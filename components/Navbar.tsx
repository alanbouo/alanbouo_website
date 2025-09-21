'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
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
              <li><Link href="/projects" className="nav-link">Projects</Link></li>
              <li><Link href="/blog" className="nav-link">Blog</Link></li>
              <li><Link href="/about" className="nav-link">About</Link></li>
              <li><Link href="/contact" className="nav-link">Contact</Link></li>
            </ul>
            
            <div className="desktop-cta">
              <Link href="/contact" className="cta-button">Get in Touch</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Bar */}
      <div className="mobile-nav-bar">
        <Link href="/projects" className="mobile-nav-item">
          <i className="fas fa-tools"></i>
          <span>Projects</span>
        </Link>
        <Link href="/blog" className="mobile-nav-item">
          <i className="fas fa-blog"></i>
          <span>Blog</span>
        </Link>
        <Link href="/about" className="mobile-nav-item">
          <i className="fas fa-user"></i>
          <span>About</span>
        </Link>
        <Link href="/contact" className="mobile-nav-item">
          <i className="fas fa-envelope"></i>
          <span>Contact</span>
        </Link>
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
          position: relative;
          z-index: 2000;
        }
        
        /* Mobile Menu */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          -webkit-tap-highlight-color: transparent;
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
          z-index: 1500;
          overflow-y: auto;
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
        
        /* Mobile Navigation Bar */
        .mobile-nav-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--primary-blue);
          padding: 0.5rem 0;
          z-index: 1000;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          text-decoration: none;
          font-size: 0.7rem;
          padding: 0.5rem 0;
          flex: 1;
          text-align: center;
        }
        
        .mobile-nav-item i {
          font-size: 1.2rem;
          margin-bottom: 0.2rem;
        }
        
        .mobile-nav-item:hover {
          color: var(--golden-yellow);
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          
          .desktop-cta {
            display: none;
          }
          
          .mobile-nav-bar {
            display: flex;
            justify-content: space-around;
          }
          
          .desktop-only {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
