import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, categoryColor } from '@/lib/posts'

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, #6A1B9A 0%, #9C27B0 100%)',
          padding: '6rem 1rem 4rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          width: '100%',
          overflowX: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          padding: '0 1rem',
          boxSizing: 'border-box'
        }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            marginBottom: '1rem',
            lineHeight: '1.2',
            padding: '0 1rem'
          }}>
            Rendre l'IA et la cybersécurité<br />
            <span style={{ color: '#ff6b35' }}>accessibles</span>
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 4vw, 1.3rem)',
            opacity: 0.9,
            margin: '0 auto 3rem',
            maxWidth: '760px',
            padding: '0 1rem',
            boxSizing: 'border-box'
          }}>
            Des explications claires, sans jargon, nourries par ce que je construis vraiment.
          </p>

          <Link
            href="/blog"
            style={{
              backgroundColor: '#FF9800',
              color: 'white',
              fontSize: '1.4rem',
              padding: '1.5rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '4rem',
              border: 'none',
              boxShadow: '0 8px 25px rgba(255, 152, 0, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            Lire les articles
          </Link>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
            maxWidth: '1000px',
            margin: '0 auto 4rem'
          }}>
            {[
              { icon: 'link', text: 'IA & Cybersécurité' },
              { icon: 'shield', text: 'Apprendre en construisant' },
              { icon: 'database', text: 'Projets concrets' }
            ].map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '20px',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  border: '2px solid rgba(255,255,255,0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {skill.icon === 'database' && (
                      <>
                        <ellipse cx="12" cy="5" rx="9" ry="3"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                        <path d="M21 17c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                      </>
                    )}
                    {skill.icon === 'link' && (
                      <>
                        <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                      </>
                    )}
                    {skill.icon === 'shield' && (
                      <>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </>
                    )}
                  </svg>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>{skill.text}</div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '4rem'
          }}>
            <Link
              href="/projects"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2 4h6a2 2 0 0 1 2 2v10z"/>
                </svg>
              </div>
              Mes produits
            </Link>
            <Link
              href="/about"
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              À propos
            </Link>
          </div>
        </div>
      </section>

      {/* Build in Public / Approach Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-block',
            backgroundColor: '#f3e8ff',
            color: '#6A1B9A',
            padding: '0.4rem 1rem',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '1.5rem'
          }}>
            MA DÉMARCHE
          </span>
          <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>
            Apprendre en construisant, pour de vrai
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', maxWidth: '760px', margin: '0 auto', fontSize: '1.1rem' }}>
            J'aime comprendre comment les choses marchent, et les construire moi-même — du code
            aux systèmes complets. C'est cette pratique concrète qui nourrit ce que j'explique
            ici, pas la version théorique.
          </p>

          {/* Funnel: X -> YouTube -> LinkedIn */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
            textAlign: 'left'
          }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.75rem',
              borderRadius: '15px',
              border: '2px solid #e9ecef',
              borderTop: '4px solid #1DA1F2'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <i className="fa-brands fa-x-twitter" style={{ fontSize: '22px', color: '#111' }}></i>
                <h3 style={{ margin: 0, color: '#333' }}>X — le journal de bord</h3>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                Ce qui avance, ce qui rate, ce qui se décide — quand j'ai quelque chose à
                montrer.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.75rem',
              borderRadius: '15px',
              border: '2px solid #e9ecef',
              borderTop: '4px solid #FF0000'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <i className="fa-brands fa-youtube" style={{ fontSize: '22px', color: '#FF0000' }}></i>
                <h3 style={{ margin: 0, color: '#333' }}>YouTube — pour approfondir</h3>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                Le temps d'expliquer l'IA et la cybersécurité, et de montrer les coulisses de la
                construction.
              </p>
            </div>

            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '1.75rem',
              borderRadius: '15px',
              border: '2px solid #e9ecef',
              borderTop: '4px solid #0077b5'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <i className="fa-brands fa-linkedin" style={{ fontSize: '22px', color: '#0077b5' }}></i>
                <h3 style={{ margin: 0, color: '#333' }}>LinkedIn — pour échanger</h3>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6', margin: 0, fontSize: '0.95rem' }}>
                Le format plus posé : les enseignements de fond, pour celles et ceux qui
                construisent aussi.
              </p>
            </div>
          </div>

          <p style={{ color: '#888', fontStyle: 'italic', marginTop: '2rem', fontSize: '0.95rem' }}>
            Trois formats, un même fil : construire et comprendre.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
            Ce que je construis
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666', maxWidth: '640px', margin: '0 auto 3rem' }}>
            Des produits propulsés par l'IA, expédiés et documentés en public
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* CookSmart */}
            <a href="https://cooksmart.app" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #FF6B35',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #FF6B35 0%, #CC4A1A 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a3 3 0 0 1 3 3c0 1.5-1 2.5-1 4H5c0-1.5-1-2.5-1-4a3 3 0 0 1 5-2.24A3 3 0 0 1 12 3a3 3 0 0 1 5 0z"/>
                    <path d="M5 10h14l-1 4H6z"/>
                    <path d="M6 14v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>CookSmart</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Ton assistant IA pour cuisiner malin : plans de repas, recettes personnalisées et courses optimisées, sans prise de tête.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#fff4ed', color: '#FF6B35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Cuisine</span>
                <span style={{ backgroundColor: '#fff4ed', color: '#FF6B35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>IA</span>
                <span style={{ backgroundColor: '#fff4ed', color: '#FF6B35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Recettes</span>
              </div>
            </a>

            {/* TubeChatAI */}
            <a href="https://tubechatai.xyz" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #FF0000',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>TubeChatAI</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Discute avec n'importe quelle vidéo YouTube — pose tes questions, obtiens des précisions et va plus loin, en temps réel.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>YouTube</span>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>LLM</span>
                <span style={{ backgroundColor: '#fff0f0', color: '#FF0000', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Apprentissage</span>
              </div>
            </a>

            {/* MemoMind */}
            <a href="https://memomind.space" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: '3px solid #667eea',
              textDecoration: 'none',
              display: 'block'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                </div>
                <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>MemoMind</h3>
                <p style={{ color: '#666', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  Discute avec tes mémos vocaux. Extrais des idées, organise tes pensées et transforme tes enregistrements en connaissances actionnables.
                </p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>IA vocale</span>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Notes</span>
                <span style={{ backgroundColor: '#f0f4ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Productivité</span>
              </div>
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/projects" style={{
              color: '#6A1B9A',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem'
            }}>
              Voir tous mes produits →
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section style={{ padding: '4rem 20px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Derniers articles
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {posts.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                border: '2px solid #e9ecef',
                overflow: 'hidden',
                position: 'relative'
              }}>
                {/* Blog Post Thumbnail */}
                {post.image ? (
                  <div style={{ position: 'relative', width: '100%', height: '120px', borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 380px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ) : (
                  <div style={{
                    width: '100%',
                    height: '120px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid rgba(255,255,255,0.3)'
                    }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-3.08-3.08 2.5 2.5 0 0 1 2.96-3.08A2.5 2.5 0 0 1 9.5 2Z"/>
                        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 3.08-3.08 2.5 2.5 0 0 0-2.96-3.08A2.5 2.5 0 0 0 14.5 2Z"/>
                      </svg>
                    </div>
                  </div>
                )}
                <div style={{ color: categoryColor(post.category), fontSize: '14px', marginBottom: '1rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
                  {post.category}
                </div>
                <h4 style={{ color: '#333', marginBottom: '1rem' }}>
                  {post.title}
                </h4>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  {post.description}
                </p>
                <div style={{ fontSize: '14px', color: '#999', display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '0.5rem'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}>
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '3rem 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Tu t'intéresses à l'IA ou à la cybersécurité ?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Reçois mes prochains articles directement par e-mail, sans algorithme entre nous.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://substack.com/@alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#FF9800',
                color: 'white',
                padding: '1.5rem 2.5rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 6px 20px rgba(255, 152, 0, 0.4)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              S'inscrire à la newsletter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
