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
