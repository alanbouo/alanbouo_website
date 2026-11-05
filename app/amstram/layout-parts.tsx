import type { CSSProperties, ReactNode } from 'react'

// Mise en forme commune aux pages d'Amstram, alignée sur /privacy.
export function AmstramPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
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
          fontFamily: 'var(--font-body)',
          lineHeight: 1.6,
          color: '#333',
          fontSize: '16px',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1
            style={{
              color: 'var(--text-color)',
              marginBottom: '0.5rem',
              fontWeight: 700,
              fontSize: 'clamp(40px, 6vw, 60px)',
              fontFamily: 'var(--font-display)',
            }}
          >
            {title}
          </h1>
          <p style={{ color: 'var(--text-color)', fontSize: 'clamp(16px, 2vw, 18px)', fontFamily: 'var(--font-body)' }}>
            {subtitle}
          </p>
        </header>
        {children}
      </div>
    </main>
  )
}

export const sectionStyle: CSSProperties = { marginBottom: '1.25rem' }

export const h2Style: CSSProperties = {
  color: 'var(--tech-green)',
  fontWeight: 500,
  fontSize: 'clamp(24px, 4vw, 32px)',
  margin: 0,
  marginBottom: '0.5rem',
  fontFamily: 'var(--font-display)',
}

export const pStyle: CSSProperties = {
  margin: 0,
  marginBottom: '15px',
  fontSize: '16px',
  lineHeight: '1.6',
  fontFamily: 'var(--font-body)',
}

export const ulStyle: CSSProperties = {
  margin: 0,
  paddingLeft: '1.25rem',
  marginBottom: '15px',
  fontFamily: 'var(--font-body)',
}

export const linkStyle: CSSProperties = {
  color: 'var(--tech-green)',
  textDecoration: 'underline',
  fontFamily: 'var(--font-body)',
}
