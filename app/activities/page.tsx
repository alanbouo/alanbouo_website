import Link from 'next/link'

export const metadata = {
  title: "Activités — Le parcours tech d'Alan Bouo",
  description: "Découvre mon travail en développement web, auto-hébergement, IA/ML et open source. Guides, tutoriels et retours d'expérience."
}

export default function ActivitiesPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Mon parcours tech</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '2rem' }}>
            Un aperçu de mon travail dans différents domaines de la tech
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section style={{ padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Self-Hosting Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>Auto-hébergement &amp; DevOps</h2>
              </div>
              <div>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Concevoir et gérer ma propre infrastructure pour plus de confidentialité, de sécurité et de
                  maîtrise des coûts. De la mise en place des serveurs au déploiement des applications, dans le
                  cloud ou en local.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/blog/construire-un-saas-rentable-en-public"
                    style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Ma méthode build in public
                  </Link>
                  <Link
                    href="/projects"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#28a745',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: '2px solid #28a745'
                    }}
                  >
                    <i className="fas fa-folder-open"></i>
                    Voir les produits
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Section */}
          <div style={{
            marginBottom: '4rem',
            backgroundColor: '#f8f9fa',
            padding: '3rem',
            borderRadius: '15px',
            border: '1px solid #e9ecef'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Développement web</h2>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Créer des applications web modernes et responsives avec les dernières technologies.
                  Du concept au déploiement, je construis des applications rapides, évolutives et agréables à utiliser.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map(tech => (
                    <span key={tech} style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '15px',
                      fontSize: '14px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/projects"
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    display: 'inline-block'
                  }}
                >
                  Voir mon travail <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                </Link>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="fas fa-code" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
              </div>
            </div>
          </div>

          {/* AI & ML Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  backgroundColor: '#6f42c1',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-brain" style={{ fontSize: '48px', color: 'white' }}></i>
                </div>
                <h2 style={{ color: '#333', marginBottom: '1rem' }}>IA &amp; Machine Learning</h2>
              </div>
              <div>
                <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Explorer l'IA et le ML avec un souci constant de confidentialité, d'éthique et d'usages concrets.
                  Comprendre et expliquer comment construire des systèmes responsables qui respectent la vie privée
                  et la souveraineté des données.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link
                    href="/blog/l-ia-expliquee-simplement"
                    style={{
                      backgroundColor: '#6f42c1',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <i className="fas fa-brain"></i>
                    L'IA expliquée simplement
                  </Link>
                  <Link
                    href="/projects"
                    style={{
                      backgroundColor: 'transparent',
                      color: '#6f42c1',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      border: '2px solid #6f42c1'
                    }}
                  >
                    <i className="fas fa-project-diagram"></i>
                    Mes produits
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Open Source Section */}
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '3rem',
            borderRadius: '15px',
            border: '1px solid #e9ecef',
            marginBottom: '4rem'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <i className="fab fa-github" style={{ fontSize: '72px', color: '#333' }}></i>
              <h2 style={{ color: '#333', marginBottom: '1rem' }}>Contributions open source</h2>
              <p style={{ fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                Passionné par la communauté open source et par la création d'outils utiles à tous.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://github.com/alanbouo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#333',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <i className="fab fa-github"></i>
                Voir sur GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Articles récents
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link href="/blog/construire-un-saas-rentable-en-public" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <span style={{ backgroundColor: '#FF9800', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  BUILD IN PUBLIC
                </span>
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                Construire un SaaS rentable en public : ma méthode
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Comment je documente en transparence ma route vers des SaaS à revenus récurrents — en pariant sur l'exécution et la localisation.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                color: '#999'
              }}>
                <span><i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>15 juil. 2026</span>
                <span><i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>6 min de lecture</span>
              </div>
            </Link>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              border: '1px solid #e9ecef',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <i className="fas fa-plus" style={{ fontSize: '48px', color: '#007bff', marginBottom: '1rem' }}></i>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Bientôt plus d'articles</h4>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                Vulgarisation IA, cybersécurité accessible et coulisses du build in public
              </p>
              <Link href="/blog" style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-block',
                alignSelf: 'center'
              }}>
                Voir tous les articles
              </Link>
            </div>

            <Link href="/blog/cybersecurite-et-ia-les-angles-morts" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid #e9ecef'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                <span style={{ backgroundColor: '#8b2e8b', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
                  CYBERSÉCURITÉ
                </span>
              </div>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                Cybersécurité et IA : les angles morts que personne ne montre
              </h4>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                Les risques concrets quand on utilise des assistants et des données au quotidien — et comment s'en prémunir.
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '14px',
                color: '#999'
              }}>
                <span><i className="fas fa-calendar" style={{ marginRight: '0.5rem' }}></i>30 juin 2026</span>
                <span><i className="fas fa-clock" style={{ marginRight: '0.5rem' }}></i>7 min de lecture</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
