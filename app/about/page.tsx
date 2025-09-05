import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Alanbouo - Self-Hosted AI Consultant',
  description: 'Meet Alanbouo, passionate self-hosted AI consultant from Marseille, France. Discover the story behind ethical AI advocacy.'
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--deep-blue) 60%, var(--olive-green) 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'var(--white)',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'Montserrat', marginBottom: '1rem' }}>Meet Your AI Garden Guide</h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', fontFamily: 'Pacifico', fontStyle: 'italic' }}>
            <em>Passionné par l'IA autonome comme l'olivier méditerranéen, cultivant des fruits éthiques depuis Marseille.</em>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div>
            <h2 style={{ marginBottom: '2rem', fontFamily: 'Pacifico', fontSize: '32px', color: 'var(--olive-green)' }}>
              My Journey in the Olive Grove of AI
            </h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Passionné par l'IA auto-hébergée depuis mes années d'université à la Sorbonne, j'ai toujours cru que
              la technologie devait servir l'humanité plutôt que d'en faire sa dépendante. Comme l'olivier qui
              prospère dans son terroir méditerranéen, l'IA trouve sa véritable valeur lorsqu'elle est libérée
              des faisceaux du cloud centralisé.
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Après des années de développement d'applications cloud pour des multinationales, j'ai pris conscience
              des dangers de la dépendance : <em style={{ fontFamily: 'Pacifico', color: 'var(--olive-green)' }}>
              les données sensibles, les coûts imprévisibles, et surtout, le manque de contrôle.</em>
            </p>
            <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '2rem' }}>
              C'est ainsi qu'est né Alanbouo - un cabinet dédié à l'accompagnement des entreprises dans leur
              transition vers une IA autonome, éthique et rentable. Aujourd'hui, plus de 50 clients ont fait
              confiance à nos solutions, réalisant une économie de 40% tout en protégeant leur souveraineté
              numérique.
            </p>
            <Link href="/contact" className="cta">
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              Start Your Journey
            </Link>
          </div>

          {/* Headshot */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '5px solid var(--golden-yellow)',
              boxShadow: '0 10px 40px rgba(218, 165, 32, 0.3)',
              margin: '0 auto',
              transition: 'transform 0.3s ease'
            }} className="profile-image-hover">
              <Image
                src="/img/alan.png"
                alt="Alanbouo - Self-Hosted AI Consultant and Mediterranean AI advocate"
                width={300}
                height={300}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
                aria-label="Professional headshot of Alanbouo"
              />
            </div>
            <div style={{ marginTop: '1.5rem', opacity: 0.8 }}>
              <i className="fas fa-map-marker-alt" style={{ color: 'var(--olive-green)', marginRight: '0.5rem' }}></i>
              Marseille, France
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem', fontFamily: 'Pacifico', fontSize: '32px' }}>
            Our Mediterranean AI Philosophy
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🌿</div>
              <h3 style={{ color: 'var(--golden-yellow)', marginBottom: '1rem' }}>Rooted in Ethics</h3>
              <p style={{ lineHeight: '1.6' }}>
                Chaque projet végétal est une opportunité de cultiver la confiance, la transparence et
                la responsabilité éthique dans l'utilisation des données.
              </p>
            </div>

            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ color: 'var(--golden-yellow)', marginBottom: '1rem' }}>Privacy First</h3>
              <p style={{ lineHeight: '1.6' }}>
                Protection des données sensibles avec des architectures auto-hébergées qui gardent
                le contrôle entre les mains de leurs propriétaires légitimes.
              </p>
            </div>

            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '1rem' }}>🌱</div>
              <h3 style={{ color: 'var(--golden-yellow)', marginBottom: '1rem' }}>Sustainable Growth</h3>
              <p style={{ lineHeight: '1.6' }}>
                Des solutions rentables qui perdurent dans le temps, comme les oliviers pluricentenières
                qui nourrissent génération après génération.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem', color: 'var(--deep-blue)' }}>Growing Fruition in Numbers</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--olive-green)' }}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>50+</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Clients Transformed</h3>
              <p>Entreprises accompagnées vers la souveraineté IA</p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--olive-green)' }}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>40%</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Cost Reduction</h3>
              <p>Économie moyenne sur les infrastructures cloud</p>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--olive-green)' }}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>100%</div>
              <h3 style={{ marginBottom: '0.5rem' }}>Privacy Focused</h3>
              <p>Conceptions entièrement auto-hébergées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Intro Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem', color: 'var(--deep-blue)', fontFamily: 'Pacifico', fontSize: '32px' }}>
            A Quick Word From Me
          </h2>
          <p style={{ marginBottom: '3rem', fontSize: '18px', color: 'var(--text-color)' }}>
            <em style={{ fontFamily: 'Pacifico', color: 'var(--olive-green)', fontSize: '22px' }}>
              Like tending olives, I grow ethical AI that nourishes businesses sustainably.
            </em> Watch this quick intro to understand my approach.
          </p>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '450px',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              border: '3px solid var(--olive-green)'
            }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Alanbouo - Ethical AI Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 0 }}
                aria-label="Introduction video about Alanbouo's approach to ethical self-hosted AI"
              ></iframe>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '16px', color: 'var(--text-color)' }}>
              <em style={{ fontFamily: 'Pacifico', color: 'var(--olive-green)' }}>
                This is just a placeholder video - will be replaced with your actual introduction
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--deep-blue)', fontFamily: 'Pacifico', fontSize: '32px' }}>
              Community Spotlight
            </h2>
            <p style={{ fontSize: '18px', color: 'var(--text-color)' }}>
              <em style={{ fontFamily: 'Pacifico', color: 'var(--olive-green)' }}>
                Voices from our growing community of ethical AI practitioners
              </em>
            </p>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--golden-yellow)',
              margin: '1rem auto 0 auto'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* X Thread Highlight */}
            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '2rem',
              borderRadius: '15px',
              border: '3px solid var(--olive-green)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#1DA1F2',
                borderRadius: '50%',
                border: '4px solid var(--light-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontWeight: 'bold',
                fontSize: '24px'
              }}>
                <i className="fab fa-twitter"></i>
              </div>

              <blockquote style={{
                fontStyle: 'italic',
                marginBottom: '2rem',
                marginTop: '3rem',
                lineHeight: '1.6',
                color: 'var(--text-color)',
                fontSize: '16px'
              }}>
                "Just discovered Alanbouo's olive approach to AI ethics. Like the finest Mediterranean oil, his solutions are pure, local, and nourishing for business growth. The migration demo was mind-blowing! 🌿 #EthicalAI"
              </blockquote>

              <div style={{ borderTop: '1px solid var(--olive-green)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  @TechEthicsNow
                </div>
                <div style={{ fontSize: '14px', color: 'var(--olive-green)' }}>
                  AI Ethics Researcher & Community Builder
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href="https://twitter.com/alanbouo" style={{ color: 'var(--golden-yellow)', textDecoration: 'none', fontSize: '14px' }}>
                    View thread on X →
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '2rem',
              borderRadius: '15px',
              border: '3px solid var(--golden-yellow)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--olive-green)',
                borderRadius: '50%',
                border: '4px solid var(--light-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontWeight: 'bold',
                fontSize: '24px'
              }}>
                <i className="fas fa-user"></i>
              </div>

              <blockquote style={{
                fontStyle: 'italic',
                marginBottom: '2rem',
                marginTop: '3rem',
                lineHeight: '1.6',
                color: 'var(--text-color)',
                fontSize: '16px'
              }}>
                "Working with Alanbouo felt like partnering with a seasoned olive farmer. His attention to ethical roots, careful nurturing, and focus on sustainable yields turned our AI privacy vulnerabilities into organizational strengths. Highly recommended!"
              </blockquote>

              <div style={{ borderTop: '1px solid var(--golden-yellow)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  Sarah Chen
                </div>
                <div style={{ fontSize: '14px', color: 'var(--olive-green)' }}>
                  CTO, HealthTech Innovations
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href="/testimonials" style={{ color: 'var(--golden-yellow)', textDecoration: 'none', fontSize: '14px' }}>
                    Read full story →
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Post */}
            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '2rem',
              borderRadius: '15px',
              border: '3px solid var(--olive-green)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                width: '50px',
                height: '50px',
                backgroundColor: '#0077B5',
                borderRadius: '50%',
                border: '4px solid var(--light-gray)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)',
                fontWeight: 'bold',
                fontSize: '20px'
              }}>
                <i className="fab fa-linkedin"></i>
              </div>

              <blockquote style={{
                fontStyle: 'italic',
                marginBottom: '2rem',
                marginTop: '3rem',
                lineHeight: '1.6',
                color: 'var(--text-color)',
                fontSize: '16px'
              }}>
                "Alanbouo's approach to AI migration is like expert olive pruning. They know exactly when and how to make the cut. Our team went from struggling with self-hosted complexity to confidently owning our AI infrastructure. The ethical framework is the olive grove foundation every AI leader needs."
              </blockquote>

              <div style={{ borderTop: '1px solid var(--olive-green)', paddingTop: '1rem' }}>
                <div style={{ fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  David Rodriguez
                </div>
                <div style={{ fontSize: '14px', color: 'var(--olive-green)' }}>
                  Head of AI Engineering, FinServe Solutions
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href="https://linkedin.com/in/alanbouo" style={{ color: 'var(--golden-yellow)', textDecoration: 'none', fontSize: '14px' }}>
                    View on LinkedIn →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="https://twitter.com/alanbouo" style={{
              backgroundColor: 'var(--golden-yellow)',
              color: 'var(--deep-blue)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease'
            }}>
              <i className="fab fa-twitter"></i>
              Join the Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Proverb Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--olive-green)', color: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <blockquote style={{ fontSize: '28px', fontFamily: 'Pacifico', fontStyle: 'italic', lineHeight: '1.4' }}>
            "Les meilleurs oliviers portent leurs plus beaux fruits..."
          </blockquote>
          <p style={{ marginTop: '2rem', opacity: 0.8 }}>
            This ancient Mediterranean wisdom guides every ethical AI solution I create
          </p>
        </div>
      </section>


    </main>
  )
}
