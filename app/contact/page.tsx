'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form handling logic would go here (Matomo tracking, email sending, etc.)
    setSubmitted(true)
    setTimeout(() => {
      alert('Thank you! Your message has been sent. Alanbouo will contact you within 24 hours.')
      setFormData({ name: '', email: '', company: '', message: '' })
      setSubmitted(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
          <h1 style={{ fontFamily: 'Montserrat', marginBottom: '1rem' }}>Let's Cultivate Your AI Future Together</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'Pacifico', fontStyle: 'italic' }}>
            <em>Every olive tree begins with a single seed of purpose. Share your goals, and let's grow something extraordinary.</em>
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--white)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--deep-blue)', fontFamily: 'Pacifico' }}>Plant Your First Seed</h2>
            <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--light-gray)', padding: '2rem', borderRadius: '15px', border: '3px solid var(--olive-green)' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '2px solid var(--light-gray)',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'var(--white)'
                  }}
                  aria-label="Your full name"
                  placeholder="Your full name"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '2px solid var(--light-gray)',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'var(--white)'
                  }}
                  aria-label="Professional email address"
                  placeholder="your.email@company.com"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="company" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '2px solid var(--light-gray)',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'var(--white)'
                  }}
                  aria-label="Company or organization name"
                  placeholder="Your company"
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--deep-blue)' }}>
                  What can we help you cultivate? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '2px solid var(--light-gray)',
                    fontSize: '16px',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'var(--white)',
                    fontFamily: 'Roboto'
                  }}
                  aria-label="Describe your AI needs and goals"
                  placeholder="Tell us about your current AI setup, challenges, and what you hope to achieve with self-hosted solutions..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                style={{
                  backgroundColor: 'var(--golden-yellow)',
                  color: 'var(--deep-blue)',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%'
                }}
                className="cta hover-glow"
                aria-label="Submit contact form"
              >
                <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                {submitted ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Why Contact */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '2rem', color: 'var(--deep-blue)', fontFamily: 'Pacifico' }}>Why Reach Out?</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', borderLeft: '4px solid var(--olive-green)' }}>
                  <i className="fas fa-leaf" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>Free Ethics Audit</h3>
                  <p>Get a 1-hour complimentary assessment of your AI ethics and privacy posture.</p>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', borderLeft: '4px solid var(--olive-green)' }}>
                  <i className="fas fa-seedling" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>Expert Consultation</h3>
                  <p>Get advice on migration strategy, compliance, and optimization tailored to your industry.</p>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: 'var(--light-gray)', borderRadius: '10px', borderLeft: '4px solid var(--olive-green)' }}>
                  <i className="fas fa-tree" style={{ fontSize: '24px', color: 'var(--olive-green)', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: 'var(--deep-blue)', marginBottom: '0.5rem' }}>Strategic Partnership</h3>
                  <p>Let's discuss how to build a long-term, mutually beneficial relationship for your AI future.</p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div style={{ backgroundColor: 'var(--deep-blue)', color: 'var(--white)', padding: '2rem', borderRadius: '15px' }}>
              <h2 style={{ marginBottom: '2rem', fontFamily: 'Pacifico' }}>Get in Touch Directly</h2>

              <div style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-envelope" style={{ marginRight: '1rem', color: 'var(--golden-yellow)' }}></i>
                <strong>Email:</strong> <a href="mailto:contact@alanbouo.com" style={{ color: 'var(--golden-yellow)', textDecoration: 'none' }}>
                  contact@alanbouo.com
                </a>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-map-marker-alt" style={{ marginRight: '1rem', color: 'var(--golden-yellow)' }}></i>
                <strong>Location:</strong> Marseille, France
                <div style={{ marginLeft: '1.5rem', marginTop: '0.5rem', opacity: '0.8', fontSize: '14px' }}>
                  Serving clients across Europe & North America
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <i className="fas fa-clock" style={{ marginRight: '1rem', color: 'var(--golden-yellow)' }}></i>
                <strong>Response Time:</strong> Within 24 hours
              </div>

              <div style={{ padding: '1rem', backgroundColor: 'var(--olive-green)', borderRadius: '10px', marginTop: '2rem' }}>
                <i className="fas fa-rocket" style={{ marginRight: '0.5rem' }}></i>
                <strong>Next Steps:</strong> Book a 15-minute discovery call after receipt of your inquiry.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Contact */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'var(--olive-green)', color: 'var(--white)', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem', fontFamily: 'Pacifico' }}>Follow the Growth Journey</h2>
          <p style={{ fontSize: '18px', marginBottom: '3rem', opacity: '0.9' }}>
            Stay connected with the latest insights in ethical AI, privacy-first development, and Mediterranean wisdom.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a
              href="https://youtube.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--olive-green)',
                padding: '1rem',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
              aria-label="Follow Alanbouo on YouTube"
            >
              <i className="fab fa-youtube" style={{ fontSize: '24px' }}></i>
            </a>

            <a
              href="https://twitter.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--olive-green)',
                padding: '1rem',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
              aria-label="Follow Alanbouo on X/Twitter"
            >
              <i className="fab fa-twitter" style={{ fontSize: '24px' }}></i>
            </a>

            <a
              href="https://linkedin.com/in/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--white)',
                color: 'var(--olive-green)',
                padding: '1rem',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="social-link"
              aria-label="Connect with Alanbouo on LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '24px' }}></i>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
