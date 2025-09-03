import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--deep-blue) 60%, var(--olive-green) 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'var(--white)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'Montserrat', marginBottom: '1rem' }}>AI Services that Grow with You</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'Pacifico', fontStyle: 'italic' }}>
            <em>From seedling to harvest—cultivating ethical AI solutions that protect your data and maximize profits.</em>
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Olive Tree Services</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ padding: '2rem', textAlign: 'center', border: '3px solid var(--olive-green)', borderRadius: '15px' }}>
              <i className="fas fa-lock" style={{ fontSize: '64px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3>AI Ethics Audits</h3>
              <p>Comprehensive privacy assessments and ethical AI implementation frameworks for complete data sovereignty.</p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', margin: '1rem 0' }}>
                <p><strong>What's Included:</strong></p>
                <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
                  <li>• Privacy impact assessment</li>
                  <li>• Ethical framework development</li>
                  <li>• Compliance gap analysis</li>
                  <li>• Self-hosted migration roadmap</li>
                </ul>
              </div>
              <Link href="#contact" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Request Audit
              </Link>
            </div>

            <div style={{ padding: '2rem', textAlign: 'center', border: '3px solid var(--olive-green)', borderRadius: '15px' }}>
              <i className="fas fa-cloud" style={{ fontSize: '64px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3>Cloud-to-Self Migration</h3>
              <p>Seamless transition from cloud dependency to secure, self-hosted AI infrastructure reducing costs by 40%+.</p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', margin: '1rem 0' }}>
                <p><strong>Migration Process:</strong></p>
                <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
                  <li>• Infrastructure assessment</li>
                  <li>• Zero-downtime migration</li>
                  <li>• Performance optimization</li>
                  <li>• 24/7 monitoring setup</li>
                </ul>
              </div>
              <Link href="#contact" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Start Migration
              </Link>
            </div>

            <div style={{ padding: '2rem', textAlign: 'center', border: '3px solid var(--olive-green)', borderRadius: '15px' }}>
              <i className="fas fa-cogs" style={{ fontSize: '64px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
              <h3>Custom Integration</h3>
              <p>Tailored AI solutions seamlessly integrated with your existing systems, maintaining full data control.</p>
              <div style={{ padding: '1rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', margin: '1rem 0' }}>
                <p><strong>Integration Features:</strong></p>
                <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
                  <li>• APIs and microservices</li>
                  <li>• Legacy system compatibility</li>
                  <li>• Custom model development</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <Link href="#contact" className="cta" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--deep-blue)', color: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem', fontFamily: 'Pacifico', fontSize: '36px' }}>
            How We Grow Your AI Garden
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '48px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>🌱</div>
              <h3>Seed Planting</h3>
              <p>Discovery and assessment phase where we understand your current AI landscape.</p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '48px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>🌿</div>
              <h3>Root Development</h3>
              <p>Building secure infrastructure and implementing privacy-first frameworks.</p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '48px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>🌳</div>
              <h3>Branch Expansion</h3>
              <p>Integration with existing systems and scaling for optimal performance.</p>
            </div>

            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '48px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}>🍃</div>
              <h3>Fruit Harvest</h3>
              <p>Measuring success and realizing ethical AI's profitable transformation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2>Ready to Cultivate Your AI Future?</h2>
          <p style={{ fontFamily: 'Pacifico', fontStyle: 'italic', margin: '2rem 0', color: 'var(--olive-green)' }}>
            Join 50+ clients who've transformed their AI capabilities and achieved unprecedented data sovereignty.
          </p>
          <Link href="/contact" className="cta" style={{ fontSize: '18px', padding: '1rem 2rem' }}>
            <i className="fas fa-calendar-alt" style={{ marginRight: '0.5rem' }}></i>
            Schedule Free Consultation
          </Link>
        </div>
      </section>

    </main>
  )
}
