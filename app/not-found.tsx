'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--deep-blue) 60%, var(--olive-green) 100%)',
      color: 'var(--white)',
      position: 'relative',
      padding: '2rem',
      textAlign: 'center'
    }}>
      {/* Olive circuit pattern overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.3,
          backgroundImage: `
            radial-gradient(circle at 20% 40%, rgba(218, 165, 32, 0.1) 2%, transparent 2%),
            radial-gradient(circle at 80% 60%, rgba(85, 107, 47, 0.15) 1.5%, transparent 1.5%),
            radial-gradient(circle at 50% 80%, rgba(218, 165, 32, 0.08) 1%, transparent 1%),
            radial-gradient(circle at 60% 20%, rgba(85, 107, 47, 0.12) 1.5%, transparent 1.5%)
          `,
          backgroundSize: '200px 200px, 150px 150px, 300px 300px, 180px 180px',
          backgroundPosition: '0 0, 150px 100px, 50px 200px, 200px 50px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
        {/* 404 Hero Section */}
        <div style={{ marginBottom: '3rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'var(--white)'
            }}
          >
            Lost in the Olive Grove?
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-roboto)',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem auto'
            }}
          >
            Just as olives thrive with local care, your journey with self-hosted AI starts here.
          </p>

          <Link
            href="/"
            style={{
              backgroundColor: 'var(--golden-yellow)',
              color: 'var(--deep-blue)',
              padding: '0.75rem 1.5rem',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block',
              fontWeight: '700',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(218, 165, 32, 0.3)',
              marginBottom: '3rem'
            }}
            className="hover-glow"
            aria-label="Return to home page"
          >
            <i className="fas fa-home" style={{ marginRight: '0.5rem' }}></i>
            Return to Home
          </Link>

          {/* Olive grove illustration */}
          <div style={{ margin: '2rem 0', fontSize: '64px' }}>
            <i className="fas fa-tree" style={{ color: 'var(--olive-green)', margin: '0 1rem' }}></i>
            <i className="fas fa-leaf" style={{ color: 'var(--golden-yellow)', margin: '0 1rem' }}></i>
            <i className="fas fa-seedling" style={{ color: 'var(--olive-green)', margin: '0 1rem' }}></i>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '32px', marginBottom: '2rem', color: 'var(--golden-yellow)' }}>
            Explore Our Grove
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <Link
              href="/"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: 'var(--white)',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '2px solid var(--olive-green)',
                transition: 'all 0.3s ease',
                color: 'var(--deep-blue)'
              }}
              className="nav-link-card"
            >
              <i className="fas fa-home" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '0.5rem' }}></i>
              <div style={{ fontWeight: 'bold' }}>Home</div>
            </Link>

            <Link
              href="/services"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: 'var(--white)',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '2px solid var(--olive-green)',
                transition: 'all 0.3s ease',
                color: 'var(--deep-blue)'
              }}
              className="nav-link-card"
            >
              <i className="fas fa-tools" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '0.5rem' }}></i>
              <div style={{ fontWeight: 'bold' }}>Services</div>
            </Link>

            <Link
              href="/blog"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: 'var(--white)',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '2px solid var(--olive-green)',
                transition: 'all 0.3s ease',
                color: 'var(--deep-blue)'
              }}
              className="nav-link-card"
            >
              <i className="fas fa-blog" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '0.5rem' }}></i>
              <div style={{ fontWeight: 'bold' }}>Blog</div>
            </Link>

            <Link
              href="/about"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: 'var(--white)',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '2px solid var(--olive-green)',
                transition: 'all 0.3s ease',
                color: 'var(--deep-blue)'
              }}
              className="nav-link-card"
            >
              <i className="fas fa-user" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '0.5rem' }}></i>
              <div style={{ fontWeight: 'bold' }}>About</div>
            </Link>

            <Link
              href="/contact"
              style={{
                display: 'block',
                padding: '1rem',
                backgroundColor: 'var(--white)',
                borderRadius: '10px',
                textDecoration: 'none',
                border: '2px solid var(--olive-green)',
                transition: 'all 0.3s ease',
                color: 'var(--deep-blue)'
              }}
              className="nav-link-card"
            >
              <i className="fas fa-envelope" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '0.5rem' }}></i>
              <div style={{ fontWeight: 'bold' }}>Contact</div>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .nav-link-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(218, 165, 32, 0.4);
          border-color: var(--golden-yellow);
          background-color: var(--light-gray);
        }

        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(218, 165, 32, 0.8);
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          }

          h1 {
            font-size: 36px !important;
          }

          p {
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .grid {
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          }

          h1 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </main>
  )
}
