import Link from 'next/link'

export default function ContactPage() {
  return (
    <main>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 1rem',
        textAlign: 'center',
        color: 'white',
        minHeight: '35vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="hero-icons" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          opacity: 0.1,
          fontSize: '120px'
        }}>
          <i className="fas fa-brain"></i>
        </div>
        <div className="hero-icons" style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          opacity: 0.1,
          fontSize: '100px'
        }}>
          <i className="fas fa-network-wired"></i>
        </div>
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
            Let's Connect
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.3rem)', opacity: 0.9, margin: '0 auto 3rem', maxWidth: '700px' }}>
            Connect with me on social to discuss AI.
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#667eea', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Follow My Journey</h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: '3rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Follow for insights on AI, self-hosting, and privacy-first development.
          </p>

          <div className="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <a
              href="https://www.youtube.com/@alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Follow Alanbouo on YouTube"
            >
              <i className="fab fa-youtube" style={{ fontSize: '48px', marginBottom: '1rem' }}></i>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>YouTube</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>Video tutorials and AI insights</p>
            </a>

            <a
              href="https://x.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Follow Alanbouo on X"
            >
              <i className="fa-brands fa-x-twitter" style={{ fontSize: '48px', marginBottom: '1rem' }}></i>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>X</h3>
{/*               <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>Connect with me on X</p>
 */}            </a>

            <a
              href="https://linkedin.com/in/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Follow Alanbouo on LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '48px', marginBottom: '1rem' }}></i>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>LinkedIn</h3>
{/*               <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>Professional networking and articles</p>
 */}            </a>

            <a
              href="https://github.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Follow Alanbouo on GitHub"
            >
              <i className="fab fa-github" style={{ fontSize: '48px', marginBottom: '1rem' }}></i>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>GitHub</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>Open source projects and code</p>
            </a>

            <a
              href="https://substack.com/@alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '2rem 1rem',
                borderRadius: '15px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              aria-label="Subscribe to Alanbouo's Newsletter"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#667eea" style={{ marginBottom: '1rem' }}>
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>Newsletter</h3>
              <p style={{ fontSize: '0.9rem', opacity: '0.8', margin: 0 }}>AI insights in your inbox</p>
            </a>
          </div>

          <div style={{ marginTop: '3rem' }}>
{/*             <p style={{ fontSize: '1.1rem', opacity: '0.9', marginBottom: '2rem' }}>
              💡 <strong>Pro tip:</strong> Follow me on multiple platforms to get the full spectrum of content -
              from deep technical tutorials on YouTube to quick insights on X!
            </p> */}
            {/* <Link
              href="/blog"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-arrow-left"></i>
              Back to Blog
            </Link> */}
          </div>
        </div>
      </section>

    </main>
  )
}
