import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Alan Bouo',
  description:
    "Learn how Alan Bouo protects your privacy. This policy explains what we collect, how it's used, retention, your rights, cookies/analytics, and how to contact us.",
}

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: '#f9f9f9', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '5px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: 1.6,
          color: '#333',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontWeight: 700 }}>Privacy Policy</h1>
          <p style={{ color: '#2c3e50', fontSize: '0.95rem' }}>Last Updated: September 23, 2025</p>
        </header>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>1. Introduction</h2>
          <p style={pStyle}>
            Your privacy matters. This Privacy Policy explains how this website collects, uses, and protects your
            information in a manner consistent with modern, privacy-first practices aligned with AI and data ethics.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>2. Information We Collect</h2>
          <p style={pStyle}>We collect only what is necessary to operate this website and communicate with you:</p>
          <ul style={ulStyle}>
            <li>
              <strong>Contact Details:</strong> If you email or book a meeting, we receive your name and email address.
            </li>
            <li>
              <strong>Newsletter:</strong> If you subscribe, we store your email address to send updates. You can
              unsubscribe anytime.
            </li>
            <li>
              <strong>Basic Analytics:</strong> Anonymous usage data (e.g., page views, referrers) to improve content and UX. No personal profiles.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>3. How We Use Your Information</h2>
          <p style={pStyle}>We use your information for the following purposes:</p>
          <ul style={ulStyle}>
            <li>To respond to inquiries and provide requested information or services.</li>
            <li>To send optional newsletter updates if you opted in.</li>
            <li>To analyze anonymous usage patterns and improve the website's performance and content.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>4. Data Retention</h2>
          <p style={pStyle}>
            Contact information is retained only as long as needed to respond to inquiries or maintain an ongoing
            professional conversation. Newsletter data is kept until you unsubscribe. Anonymous analytics do not include
            personally identifiable information.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>5. Your Rights</h2>
          <p style={pStyle}>Depending on your jurisdiction, you may have the right to:</p>
          <ul style={ulStyle}>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Object to certain processing or withdraw consent at any time.</li>
          </ul>
          <p style={pStyle}>
            To exercise your rights, email{' '}
            <a href="mailto:privacy@alanbouo.com" style={linkStyle}>
              privacy@alanbouo.com
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>6. Cookies & Analytics</h2>
          <p style={pStyle}>
            This site may use a privacy-friendly analytics tool to understand how pages are used. Data is aggregated and
            anonymized. Cookies, if present, are minimal and used only for essential functionality or consent preferences.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>7. Data Security</h2>
          <p style={pStyle}>
            Reasonable technical and organizational measures are employed to protect information from unauthorized access
            or disclosure. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>8. Contact Us</h2>
          <p style={pStyle}>
            If you have questions or requests related to this Privacy Policy, please contact:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:me@alanbouo.com" style={linkStyle}>
                me@alanbouo.com
              </a>
            </li>
          </ul>
          <div style={{ marginTop: '1rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                background: '#DAA520',
                color: '#001F3F',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 700,
              }}
            >
              Contact Page
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

/* Inline style helpers */
const sectionHeadingStyle: React.CSSProperties = {
  color: '#34495e',
  fontWeight: 700,
  fontSize: '1.25rem',
  margin: 0,
  marginBottom: '0.5rem',
}

const pStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: '15px',
}

const ulStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: '1.25rem',
  marginBottom: '15px',
}

const linkStyle: React.CSSProperties = {
  color: '#34495e',
  textDecoration: 'underline',
}
