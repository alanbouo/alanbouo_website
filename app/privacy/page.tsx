import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Alanbouo | Ethical AI and Data Protection',
  description: 'Privacy policy for Alanbouo self-hosted AI consultancy services. Learn how we protect your data with complete transparency and no-cloud philosophy.'
}

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: 'var(--white)', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <i className="fas fa-shield-alt" style={{ fontSize: '48px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
          <h1 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Privacy Policy</h1>
          <p style={{ fontFamily: 'Pacifico', fontSize: '18px', color: 'var(--olive-green)', fontStyle: 'italic' }}>
            Because true growth begins with trust and transparency
          </p>
        </header>

        {/* Last Updated */}
        <section style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '1rem',
            borderRadius: '8px',
            border: '2px solid var(--olive-green)',
            display: 'inline-block',
            fontSize: '14px',
            color: 'var(--text-color)'
          }}>
            Last updated: December 2024
          </div>
        </section>

        {/* Introduction */}
        <section style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            At Alanbouo, we believe in the power of self-hosted AI to protect your privacy like cherished olives
            in a Mediterranean grove. This privacy policy explains how we handle what little information we collect
            and why we collect it at all.
          </p>
        </section>

        {/* Information We Collect */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            🌱 What Information We Collect
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Unlike cloud-based AI services that harvest vast amounts of user data without true consent,
            we only collect information you actively provide:
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <i className="fas fa-envelope" style={{ color: 'var(--golden-yellow)', marginRight: '1rem', marginTop: '0.3rem' }}></i>
              <div>
                <strong>Contact Information:</strong> Name, email, and company details provided through our contact form
                for professional communication about AI consulting services.
              </div>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <i className="fas fa-clock" style={{ color: 'var(--golden-yellow)', marginRight: '1rem', marginTop: '0.3rem' }}></i>
              <div>
                <strong>Newsletter Subscriptions:</strong> Email address only, processed through our self-hosted
                newsletter system with immediate unsubscribe capability.
              </div>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <i className="fas fa-analytics" style={{ color: 'var(--golden-yellow)', marginRight: '1rem', marginTop: '0.3rem' }}></i>
              <div>
                <strong>Web Analytics:</strong> Self-hosted Matomo instance collects anonymous usage patterns
                to improve our olive tree-themed website—just page views and referral sources, no personal data.
              </div>
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            🌿 How We Use Your Information
          </h2>
          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '2rem',
            borderRadius: '15px',
            marginBottom: '2rem',
            border: '3px solid var(--olive-green)'
          }}>
            <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>
              ✉️ Primary Purpose: Professional Communication
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              We use the information you provide exclusively to respond to inquiries about AI ethics audits,
              self-hosted migration services, or technical consulting needs. Each response is a step toward
              cultivating your organization's data sovereignty.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '2rem',
            borderRadius: '15px',
            marginBottom: '2rem',
            border: '3px solid var(--olive-green)'
          }}>
            <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>
              📧 Newsletter Communications
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              With explicit permission only, we share timely insights about ethical AI developments,
              privacy best practices, and Mediterranean wisdom for sustainable technology growth.
              You can unsubscribe instantly from any message.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '2rem',
            borderRadius: '15px',
            border: '3px solid var(--olive-green)'
          }}>
            <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>
              📊 Website Improvement
            </h3>
            <p style={{ lineHeight: '1.8' }}>
              Anonymous website analytics help us understand how visitors interact with our olive
              grove philosophy and identify areas for growth in our educational content.
            </p>
          </div>
        </section>

        {/* Self-Hosted Philosophy */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            🏠 Our Self-Hosted Philosophy
          </h2>
          <p style={{ lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Unlike cloud providers that harvest and sell your data, we operate with complete transparency:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--deep-blue)', color: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
              <i className="fas fa-server" style={{ fontSize: '32px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}></i>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Self-Hosted Infrastructure</h3>
              <p>Newsletter, analytics, and consulting communications all run on our controlled servers, not external services.</p>
            </div>

            <div style={{ backgroundColor: 'var(--olive-green)', color: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
              <i className="fas fa-lock" style={{ fontSize: '32px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}></i>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Data Control</h3>
              <p>Your information never leaves our premise. No cloud backups, no external processing, no data sharing.</p>
            </div>

            <div style={{ backgroundColor: 'var(--deep-blue)', color: 'var(--white)', padding: '1.5rem', borderRadius: '10px' }}>
              <i className="fas fa-eye-slash" style={{ fontSize: '32px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}></i>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem' }}>Transparency First</h3>
              <p>You always know what information we collect and exactly how it's used. No hidden policies or terms.</p>
            </div>
          </div>

          <p style={{ fontFamily: 'Pacifico', fontSize: '20px', fontStyle: 'italic', color: 'var(--olive-green)', textAlign: 'center', margin: '2rem 0' }}>
            "Like the olive tree that produces fruit for generations, our systems are built for permanence, not profit."
          </p>
        </section>

        {/* Data Retention */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            ⏳ Data Retention Policy
          </h2>
          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '2rem',
            borderRadius: '15px',
            border: '3px solid var(--olive-green)'
          }}>
            <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>
              🔥 Automatic Data Deletion
            </h3>
            <ul style={{ lineHeight: '1.8', paddingLeft: '2rem' }}>
              <li><strong>Completed Projects:</strong> Contact details deleted 2 years after project completion</li>
              <li><strong>Unsubscribe Requests:</strong> Email information removed immediately upon request</li>
              <li><strong>Analytics Data:</strong> Anonymous usage patterns retained only for website improvement, never linked to individuals</li>
              <li><strong>Uncontacted Information:</strong> If we haven't communicated in 6 months, contact details are automatically deleted</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            👤 Your Rights: You're in Control
          </h2>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '4px solid var(--golden-yellow)',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <i className="fas fa-user-times" style={{ fontSize: '24px', color: 'var(--deep-blue)', marginRight: '1rem', marginTop: '0.2rem' }}></i>
              <div>
                <strong>Right to Deletion:</strong> Request complete removal of any personal information we hold about you, processed within 48 hours.
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '4px solid var(--golden-yellow)',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <i className="fas fa-file-alt" style={{ fontSize: '24px', color: 'var(--deep-blue)', marginRight: '1rem', marginTop: '0.2rem' }}></i>
              <div>
                <strong>Right to Access:</strong> Receive a complete, transparent report of exactly what information we collect and how it's used.
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '4px solid var(--golden-yellow)',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <i className="fas fa-edit" style={{ fontSize: '24px', color: 'var(--deep-blue)', marginRight: '1rem', marginTop: '0.2rem' }}></i>
              <div>
                <strong>Right to Correction:</strong> Update or correct any information you believe is inaccurate or outdated.
              </div>
            </div>

            <div style={{
              backgroundColor: 'var(--light-gray)',
              padding: '1.5rem',
              borderRadius: '10px',
              borderLeft: '4px solid var(--golden-yellow)',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <i className="fas fa-stop-circle" style={{ fontSize: '24px', color: 'var(--deep-blue)', marginRight: '1rem', marginTop: '0.2rem' }}></i>
              <div>
                <strong>Right to Object:</strong> Stop any specific use of your data at any time, for any reason.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link href="/contact" className="cta" style={{ fontSize: '16px', padding: '0.75rem 1.5rem' }}>
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              Contact to Exercise Rights
            </Link>
          </div>
        </section>

        {/* Cookies and Analytics */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{
            color: 'var(--olive-green)',
            marginBottom: '1rem',
            fontSize: '24px',
            borderBottom: '2px solid var(--golden-yellow)',
            paddingBottom: '0.5rem'
          }}>
            🍪 Self-Hosted Analytics and Cookies
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Our approach to tracking and analytics embodies the same privacy-first philosophy:
          </p>

          <div style={{
            backgroundColor: 'var(--light-gray)',
            padding: '2rem',
            borderRadius: '15px',
            border: '3px solid var(--olive-green)',
            marginBottom: '2rem'
          }}>
            <ul style={{ lineHeight: '1.8', paddingLeft: '2rem' }}>
              <li><strong>Completely Anonymous:</strong> No tracking of individuals, only aggregated usage patterns</li>
              <li><strong>Self-Hosted Matomo:</strong> No data shared with Google, Meta, or any third-party trackers</li>
              <li><strong>Minimal Cookies:</strong> Optional consent-managed cookie for tracking pre-opted visitor preferences</li>
              <li><strong>Opt-Out Available:</strong> Simple privacy controls to disable analytics for your visit</li>
              <li><strong>Data Control:</strong> All analytics data stays on our servers under our full control</li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{
            backgroundColor: 'var(--olive-green)',
            color: 'var(--white)',
            padding: '3rem 2rem',
            borderRadius: '15px',
            textAlign: 'center'
          }}>
            <i className="fas fa-seedling" style={{ fontSize: '48px', color: 'var(--golden-yellow)', marginBottom: '1rem' }}></i>
            <h2 style={{ fontFamily: 'Pacifico', fontSize: '28px', marginBottom: '1rem' }}>
              Questions About Your Privacy?
            </h2>
            <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
              We're here to clarify, update, or delete any aspect of how we handle information.
              Privacy concerns should never grow in the shadows.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <strong>Contact Alanbouo:</strong><br />
              Email: <a href="mailto:privacy@alanbouo.com" style={{ color: 'var(--golden-yellow)', textDecoration: 'none' }}>
                privacy@alanbouo.com
              </a><br />
              <span style={{ fontSize: '14px', opacity: '0.8' }}>Response within 24 hours</span>
            </div>
            <Link href="/contact" className="cta" style={{ fontSize: '16px', padding: '0.75rem 1.5rem' }}>
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              Reach Out Directly
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
