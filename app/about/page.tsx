import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Alan Bou - AI App Builder & Indie Developer',
  description: 'Meet Alan Bou, indie AI developer building and shipping AI-powered products. Creator of ClawPilot, TubeChatAI, MemoMind, VibeX, and VigilAI. Based in Lyon, France.'
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        color: 'white',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 'bold' }}>
              ALAN BOUO
            </h1>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '2rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>
              AI APP BUILDER
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '500' }}>
              I build and ship AI-powered products that solve real problems. From idea to launch, I create tools people actually use.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>Products I've Shipped:</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://clawpilot.life" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>ClawPilot</a> - Your personal AI on WhatsApp</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://tubechatai.xyz" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>TubeChatAI</a> - Chat with any YouTube video</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://memomind.space" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>MemoMind</a> - AI-powered voice memo insights</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://vibx.space" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>VibeX</a> - AI growth tool for X/Twitter</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://vigilai.watch" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>VigilAI</a> - Brand monitoring across AI assistants</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <Link href="/contact" style={{
              backgroundColor: '#FF9800',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 25px rgba(255, 152, 0, 0.5)',
              transition: 'all 0.3s ease'
            }}>
              <i className="fas fa-envelope"></i>
              Contact Me
            </Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', marginBottom: '2rem' }}>
              <a href="tel:+33667316018" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
              <a href="mailto:alan@alboudata.com" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://www.linkedin.com/in/alanbouo/" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/al-bou" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <div style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              opacity: 0.1,
              fontSize: '120px',
              animation: 'fadeIn 2s ease-in-out'
            }}>
              <i className="fas fa-brain" style={{ color: '#8b2e8b' }}></i>
            </div>
          </div>

          {/* Profile Photo */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '6px solid #ff6b35',
              boxShadow: '0 15px 50px rgba(255, 107, 53, 0.4)',
              margin: '0 auto',
              transition: 'transform 0.3s ease'
            }} className="profile-image-hover">
              <Image
                src="/img/alan.png"
                alt="Alan BOUO - Data Science & AI Expert"
                width={320}
                height={320}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
                aria-label="Professional headshot of Alan BOUO"
              />
            </div>
            <div style={{ marginTop: '2rem', opacity: 0.9, fontSize: '18px' }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
              Lyon, France 🇫🇷
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Education & Certifications
          </h2>

          <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-certificate" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Google Cybersecurity Professional Certificate</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>2024</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Training in cybersecurity, strengthening my skills in privacy and security for AI applications.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Certificate of Specialized Studies in Artificial Intelligence</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>Télécom Paris, France - 2020</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Advanced studies in AI, covering LLMs and neural networks.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Master of Science in Energy Systems Management</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>University College London, UK - 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Master's in energy systems management, with a focus on data and optimization.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Engineering Degree</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>CentraleSupélec, France - 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Engineering degree, solid foundation in mathematics and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>



      </main>
  )
}
