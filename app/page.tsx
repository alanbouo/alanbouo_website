import Link from 'next/link'
import AIEthicsQuiz from '@/components/AIEthicsQuiz'
import CTAWithAB from '@/components/CTAWithAB'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alanbouo - Self-Hosted AI Consulting',
  description: 'Empowering businesses with self-hosted AI for privacy and control',
}

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: 'linear-gradient(135deg, var(--deep-blue) 60%, var(--olive-green) 100%)',
          padding: '4rem 1rem',
          textAlign: 'center',
          color: 'var(--white)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* CSS-based olive circuit pattern overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.3,
            background: `
              radial-gradient(circle at 20% 30%, rgba(213, 165, 32, 0.1) 2%, transparent 2%),
              radial-gradient(circle at 80% 70%, rgba(85, 107, 47, 0.15) 1.5%, transparent 1.5%),
              radial-gradient(circle at 40% 60%, rgba(218, 165, 32, 0.08) 1%, transparent 1%),
              radial-gradient(circle at 90% 20%, rgba(85, 107, 47, 0.12) 1.5%, transparent 1.5%)
            `,
            backgroundSize: '300px 300px, 200px 200px, 400px 400px, 250px 250px',
            backgroundPosition: '0 0, 100px 100px, 50px 200px, 150px 50px',
            pointerEvents: 'none'
          }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Empowering Businesses with Self-Hosted AI</h1>
          <p className="hero-subtitle">
            <em>Just as olives yield rich oil when pressed locally, self-hosted AI extracts value without leaking data to the cloud.</em>
          </p>
          <CTAWithAB href="/services" className="cta fade-glow hover-glow hero-cta">
            Book a Free AI Audit
          </CTAWithAB>
    <p className="hero-meta">100% privacy-focused deployments • Reduced costs by 40% for clients • 50+ clients transformed</p>
        </div>
      </section>

      {/* Olive Grove Infographic */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)', borderTop: '1px solid var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem', color: 'var(--deep-blue)' }}>
            <em style={{ fontFamily: 'Pacifico, cursive', fontSize: '36px' }}>AI Ecosystem as Olive Grove</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Roots */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--golden-yellow)' }}>
              <i className="fas fa-seedling" style={{ fontSize: '48px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Roots: Data Privacy</h3>
              <p style={{ lineHeight: '1.6' }}>Strong foundation built on secure, self-hosted infrastructure that protects sensitive data like precious olive roots.</p>
            </div>

            {/* Branches */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--golden-yellow)' }}>
              <i className="fas fa-tree" style={{ fontSize: '48px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Branches: Ethical Decisions</h3>
              <p style={{ lineHeight: '1.6' }}><em style={{ fontFamily: 'Pacifico, cursive' }}>Nurturing AI like olive trees</em> ensures balanced growth and responsible decision-making.</p>
            </div>

            {/* Fruits */}
            <div style={{ padding: '2rem', backgroundColor: 'var(--light-gray)', borderRadius: '15px', border: '3px solid var(--golden-yellow)' }}>
              <i className="fas fa-apple-alt" style={{ fontSize: '48px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Fruits: Profitable Outcomes</h3>
              <p style={{ lineHeight: '1.6' }}>Harvest the rich rewards of efficient, secure AI deployments that drive business success.</p>
            </div>
          </div>

          <p style={{ marginTop: '3rem', fontStyle: 'italic', fontFamily: 'Pacifico, cursive', fontSize: '20px', color: 'var(--olive-green)' }}>
            Cultivating ethical AI that thrives locally, just like the finest Mediterranean olive groves.
          </p>
        </div>
      </section>

      {/* Services Teaser */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Services</h2>
          <div className="grid grid-3">
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <i className="fas fa-lock" style={{ fontSize: '48px', color: 'var(--olive-green)' }}></i>
              <h3>AI Ethics Audits</h3>
              <p>Ensure your AI deployments are privacy-first and ethical</p>
              <Link href="/services" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More</Link>
            </div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <i className="fas fa-cloud" style={{ fontSize: '48px', color: 'var(--olive-green)' }}></i>
              <h3>Cloud-to-Self Migration</h3>
              <p>Move your AI infrastructure off cloud providers</p>
              <Link href="/services" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More</Link>
            </div>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <i className="fas fa-cogs" style={{ fontSize: '48px', color: 'var(--olive-green)' }}></i>
              <h3>Custom Integration</h3>
              <p>Tailored AI solutions for your specific needs</p>
              <Link href="/services" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Rencontrez Alanbouo</h2>
            <p style={{ fontSize: '18px', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Passionné par l'IA auto-hébergée depuis mes années d'université, j'aide les entreprises à maîtriser
              leurs données tout en réduisant leur dépendance aux géants cloud.
            </p>
            <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '2rem' }}>
              Comme le dit si bien le proverbe : "Les meilleurs oliviers portent leurs plus beaux fruits."
              Mon approche place l'éthique et la confidentialité au cœur de chaque déploiement IA.
            </p>
            <Link href="/about" className="cta" style={{ backgroundColor: 'var(--golden-yellow)', color: 'var(--deep-blue)' }}>
              En savoir plus sur moi
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/img/placeholder-avatar.svg"
              alt="Alanbouo - Consultant IA auto-hébergée"
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--golden-yellow)',
                boxShadow: '0 8px 25px rgba(218, 165, 32, 0.3)',
                transition: 'transform 0.3s ease'
              }}
              className="profile-image"
            />
            <div style={{ marginTop: '1rem', opacity: '0.9' }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem', color: 'var(--olive-green)' }}></i>
              Marseille, France
            </div>
          </div>
        </div>
      </section>

      {/* AI Ethics Quiz - Self-Hosted */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--light-gray)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>AI Ethics Quiz: Cultivate Your Harvest</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-color)' }}>
              <em style={{ fontFamily: 'Pacifico, cursive', color: 'var(--olive-green)' }}>
                Discover your AI privacy maturity level
              </em> - No external APIs, 100% local processing for under 2-second loads
            </p>
          </div>

          <AIEthicsQuiz />
        </div>
      </section>

      {/* Social Proof Testimonials */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--deep-blue)' }}>Client Harvest Success Stories</h2>
            <div style={{
              width: '60px',
              height: '4px',
              backgroundColor: 'var(--golden-yellow)',
              margin: '1rem auto 2rem auto'
            }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              {
                quote: "Alanbouo's setup saved us 40% while keeping data ethical—fruitful results!",
                author: "Marie Dubois",
                role: "CTO, TechStart Marseille",
                logo: "M"
              },
              {
                quote: "From cloud dependency to complete data sovereignty. Olive grove wisdom at its finest.",
                author: "Pierre Laurent",
                role: "Data Director, FinanceFlow",
                logo: "F"
              },
              {
                quote: "50+ clients transformed, including mine. The moral of the olive: true value comes from ethical nurture.",
                author: "Sophie Martinez",
                role: "Privacy Officer, HealthTech Solutions",
                logo: "H"
              }
            ].map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--light-gray)',
                padding: '2rem',
                borderRadius: '15px',
                border: '3px solid var(--golden-yellow)',
                position: 'relative',
                transition: 'transform 0.3s ease'
              }} className="testimonial-card">
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '20px',
                  width: '50px',
                  height: '50px',
                  backgroundColor: 'var(--olive-green)',
                  borderRadius: '50%',
                  border: '4px solid var(--white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--white)',
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}>
                  {testimonial.logo}
                </div>

                <blockquote style={{
                  fontStyle: 'italic',
                  marginBottom: '2rem',
                  marginTop: '2rem',
                  lineHeight: '1.6',
                  color: 'var(--text-color)',
                  fontSize: '16px'
                }}>
                  "{testimonial.quote}"
                </blockquote>

                <div style={{ borderTop: '1px solid var(--golden-yellow)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ fontSize: '14px', color: 'var(--olive-green)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              href="/about#testimonials"
              style={{
                backgroundColor: 'var(--golden-yellow)',
                color: 'var(--deep-blue)',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="fas fa-plus"></i> View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup & YouTube Link */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            backgroundColor: 'var(--white)',
            color: 'var(--deep-blue)',
            padding: '3rem',
            borderRadius: '20px',
            textAlign: 'center'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Cultivate Your AI Knowledge</h2>
            <p style={{ fontSize: '18px', marginBottom: '2rem', color: 'var(--text-color)' }}>
              Get weekly insights on ethical AI deployment and self-hosted best practices
            </p>

            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '2rem',
              borderRadius: '15px',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '2rem auto'
            }}>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={{
                    padding: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '16px',
                    flex: '1',
                    minWidth: '200px'
                  }}
                />
                <button
                  style={{
                    backgroundColor: 'var(--golden-yellow)',
                    color: 'var(--deep-blue)',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <i className="fas fa-seedling"></i> Subscribe
                </button>
              </div>
            </div>

            <div style={{
              borderTop: '2px solid var(--golden-yellow)',
              paddingTop: '2rem',
              marginTop: '2rem'
            }}>
              <h3 style={{ marginBottom: '1rem' }}>Also Discover:</h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                <a
                  href="https://youtube.com/alanbouo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'var(--olive-green)',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  className="social-link"
                >
                  <i className="fab fa-youtube" style={{ fontSize: '48px', marginBottom: '0.5rem' }}></i>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>Tutorial Videos</span>
                  <span style={{ fontSize: '12px', opacity: '0.8' }}>Step-by-step guides</span>
                </a>

                <a
                  href="/blog"
                  style={{
                    backgroundColor: 'var(--golden-yellow)',
                    color: 'var(--deep-blue)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'transform 0.3s ease'
                  }}
                  className="social-link"
                >
                  <i className="fas fa-blog" style={{ fontSize: '48px', marginBottom: '0.5rem' }}></i>
                  <span style={{ fontSize: '14px', fontWeight: 'bold' }}>AI Blog</span>
                  <span style={{ fontSize: '12px', opacity: '0.8' }}>Deep insights</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
