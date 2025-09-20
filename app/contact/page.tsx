'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form handling logic would go here (Matomo tracking, email sending, etc.)
    setSubmitted(true)
    setTimeout(() => {
      alert('Thank you! Your message has been sent. Alanbouo will contact you within 24 hours.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    setNewsletterSubmitted(true)
    setTimeout(() => {
      alert('Thank you for subscribing! You will receive updates on the latest AI innovations.')
      setNewsletterEmail('')
      setNewsletterSubmitted(false)
    }, 1000)
  }

  return (
    <main>
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-icons {
            display: none !important;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <div className="hero-icons" style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          opacity: 0.1,
          fontSize: '120px'
        }}>
          <i className="fas fa-brain"></i>
        </div>
        <div className="hero-icons" style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          opacity: 0.1,
          fontSize: '100px'
        }}>
          <i className="fas fa-network-wired"></i>
        </div>
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', marginBottom: '1rem', lineHeight: '1.2' }}>
            Ready to Grow Your Business with AI?
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.3rem)', opacity: 0.9, margin: '0 auto 3rem', maxWidth: '700px' }}>
            Contact us to explore your opportunities.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div className="contact-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>

          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: '2rem', color: '#333' }}>Get In Touch</h2>
            <form onSubmit={handleSubmit} style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '15px', border: '2px solid #e9ecef' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
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
                    border: '2px solid #e9ecef',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  aria-label="Your full name"
                  placeholder="Your full name"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
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
                    border: '2px solid #e9ecef',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  aria-label="Professional email address"
                  placeholder="your.email@company.com"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '2px solid #e9ecef',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  aria-label="Select subject"
                >
                  <option value="">Select a subject</option>
                  <option value="AI Service Request">AI Service Request</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
                  Message *
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
                    border: '2px solid #e9ecef',
                    fontSize: '16px',
                    resize: 'vertical',
                    minHeight: '120px',
                    transition: 'border-color 0.3s ease',
                    backgroundColor: 'white'
                  }}
                  aria-label="Describe your AI needs and goals"
                  placeholder="Tell us about your current AI setup, challenges, and what you hope to achieve..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                }}
                aria-label="Submit contact form"
              >
                <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                {submitted ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ marginBottom: '2rem', color: '#333' }}>Contact Information</h2>
              <div style={{ display: 'grid', gap: '2rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                  <i className="fas fa-envelope" style={{ fontSize: '24px', color: '#667eea', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Email</h3>
                  <p><a href="mailto:me@alanbouo.com" style={{ color: '#667eea', textDecoration: 'none' }}>me@alanbouo.com</a></p>
                </div>

{/*                 <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                  <i className="fas fa-phone" style={{ fontSize: '24px', color: '#667eea', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Phone</h3>
                  <p><a href="tel:+33123456789" style={{ color: '#667eea', textDecoration: 'none' }}>+33 1 23 45 67 89</a></p>
                </div> */}

                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                  <i className="fas fa-map-marker-alt" style={{ fontSize: '24px', color: '#667eea', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Location</h3>
                  <p>12 rue de la Part-Dieu, 69003, Lyon, France</p>
                  <p style={{ fontSize: '14px', color: '#666' }}>Serving clients across Europe & North America</p>
                </div>

                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                  <i className="fas fa-calendar-alt" style={{ fontSize: '24px', color: '#667eea', marginBottom: '1rem' }}></i>
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Schedule a Call</h3>
                  <p><a href="https://cal.com/alanbouo/ai-growth-consultation" target="_blank" rel="noopener noreferrer" style={{ color: '#667eea', textDecoration: 'none' }}>Book a meeting</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA - Newsletter */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem', color: '#333' }}>Stay Updated on the Latest AI Innovations</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
            Subscribe to our newsletter for insights on AI ethics, self-hosting, and cutting-edge developments.
          </p>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '2px solid #e9ecef',
                fontSize: '16px',
                transition: 'border-color 0.3s ease',
                backgroundColor: 'white'
              }}
              placeholder="Enter your email address"
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              disabled={newsletterSubmitted}
              style={{
                backgroundColor: '#667eea',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}
              aria-label="Subscribe to newsletter"
            >
              <i className="fas fa-envelope" style={{ marginRight: '0.5rem' }}></i>
              {newsletterSubmitted ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      {/* Social Contact */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#667eea', color: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem' }}>Follow Us</h2>
          <p style={{ fontSize: '18px', marginBottom: '3rem', opacity: '0.9' }}>
            Stay connected with the latest insights in ethical AI and privacy-first development.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <a
              href="https://youtube.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
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
              aria-label="Follow Alanbouo on YouTube"
            >
              <i className="fab fa-youtube" style={{ fontSize: '24px' }}></i>
            </a>

            <a
              href="https://twitter.com/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
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
              aria-label="Follow Alanbouo on X/Twitter"
            >
              <i className="fab fa-twitter" style={{ fontSize: '24px' }}></i>
            </a>

            <a
              href="https://linkedin.com/in/alanbouo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: 'white',
                color: '#667eea',
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
              aria-label="Follow Alanbouo on LinkedIn"
            >
              <i className="fab fa-linkedin" style={{ fontSize: '24px' }}></i>
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
