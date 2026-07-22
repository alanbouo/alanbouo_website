import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'À propos d\'Alan Bouo — Expert IA & cybersécurité, build in public',
  description: "Alan Bouo, passionné d'IA & de cybersécurité. Je construis des produits et j'apprends en public, en rendant ces sujets accessibles. Créateur de ClawPilot, TubeChatAI, MemoMind, VibeX et VigilAI. Basé à Lyon, France."
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
            <h2 style={{ fontSize: 'clamp(1.3rem, 4vw, 2rem)', marginBottom: '2rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>
              Expert IA &amp; Cybersécurité
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '500' }}>
              Je construis des produits, seul, et je documente tout en public. Ce qui me motive :
              comprendre, fabriquer des choses utiles, et pouvoir vivre de ce que je crée — en
              gardant mon indépendance.
            </p>
            <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '2rem', opacity: 0.92 }}>
              Ce qui me tient à cœur, c'est de rendre l'IA et la cybersécurité vraiment{' '}
              <strong>accessibles</strong>. J'explique en français, simplement, ce que je comprends —
              parce que c'est ma langue et que peu de gens le font sur ces sujets.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>Produits que je construis :</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://clawpilot.life" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>ClawPilot</a> — Ton IA personnelle sur WhatsApp</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://tubechatai.xyz" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>TubeChatAI</a> — Discuter avec n'importe quelle vidéo YouTube</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://memomind.space" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>MemoMind</a> — Des insights à partir de tes mémos vocaux</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://vibx.space" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>VibeX</a> — Outil de croissance IA pour X/Twitter</li>
                <li style={{ marginBottom: '0.5rem' }}>• <a href="https://vigilai.watch" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b35', textDecoration: 'none' }}>VigilAI</a> — Surveillance de marque sur les assistants IA</li>
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
              Me contacter
            </Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', marginBottom: '2rem' }}>
              <a href="https://www.youtube.com/@alanbouo" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://x.com/alanbouo" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/alanbouo/" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/alanbouo" target="_blank" rel="noopener noreferrer" style={{
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
                alt="Alan BOUO — Expert IA & cybersécurité"
                width={320}
                height={320}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
                aria-label="Portrait professionnel d'Alan BOUO"
              />
            </div>
            <div style={{ marginTop: '2rem', opacity: 0.9, fontSize: '18px' }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
              Lyon, France 🇫🇷
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Ma démarche
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '10px', borderLeft: '4px solid #6A1B9A' }}>
              <h3 style={{ color: '#333', marginBottom: '0.75rem' }}>🎯 Ce qui me motive</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Comprendre, fabriquer des choses utiles, et vivre de ce que je crée en gardant mon indépendance.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
              <h3 style={{ color: '#333', marginBottom: '0.75rem' }}>🧭 Ma façon de faire</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Partir d'idées qui ont fait leurs preuves plutôt que de tout réinventer, et y apporter ma patte.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '10px', borderLeft: '4px solid #ff6b35' }}>
              <h3 style={{ color: '#333', marginBottom: '0.75rem' }}>🔍 Ce que j'apporte</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Une double casquette IA + cybersécurité et l'envie de vulgariser. La sécurité est
                souvent l'angle mort des contenus IA : c'est là que j'ai envie d'aider.
              </p>
            </div>
            <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '10px', borderLeft: '4px solid #556B2F' }}>
              <h3 style={{ color: '#333', marginBottom: '0.75rem' }}>📖 En transparence</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Je documente le parcours en public : décisions, avancées, doutes et ratés assumés.
                Sans version marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Formation &amp; certifications
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
                Formation en cybersécurité, renforçant mes compétences en confidentialité et sécurité des applications IA.
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
                  <h3 style={{ color: '#333', margin: 0 }}>Certificat d'études spécialisées en Intelligence Artificielle</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>Télécom Paris, France — 2020</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Études avancées en IA, couvrant les LLM et les réseaux de neurones.
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
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>University College London, UK — 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Master en gestion des systèmes énergétiques, avec un focus sur les données et l'optimisation.
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
                  <h3 style={{ color: '#333', margin: 0 }}>Diplôme d'ingénieur</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>CentraleSupélec, France — 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Diplôme d'ingénieur, socle solide en mathématiques et technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
  )
}
