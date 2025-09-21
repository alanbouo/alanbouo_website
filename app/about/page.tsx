import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Alan Bou - Data Science & AI Consultant',
  description: 'Meet Alan Bou, expert data science consultant specializing in AI, machine learning, and SEO. Based in Lyon, France, with 10+ years experience in transforming data into business advantages.'
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        color: 'white',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="hero-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem', lineHeight: '1.2', fontWeight: 'bold' }}>
              ALAN BOUO
            </h1>
            <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', marginBottom: '2rem', opacity: 0.9, textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600' }}>
              AI & DATA EXPERT
            </h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '2rem', fontWeight: '500' }}>
              Harnessing the power of AI and data science to drive innovation and create competitive advantages for forward-thinking businesses.
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '18px', marginBottom: '1rem', color: 'rgba(255,255,255,0.9)' }}>Specializations:</h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Large Language Models (LLM) - Fine-tuning, deployment, and optimization of transformer-based models like GPT, BERT, and custom architectures for enterprise applications</li>
                <li style={{ marginBottom: '0.5rem' }}>• Machine Learning (NLP, Graph, timeseries)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Deep Learning (CNN & LLM)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Data Science</li>
                <li style={{ marginBottom: '0.5rem' }}>• Technologies (Python [Scikit-Learn, Keras, Tensorflow], AWS, SQL)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Search Engine Optimisation (SEO)</li>
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <Link href="/contact" style={{
                backgroundColor: '#ff6b35',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
                transition: 'all 0.3s ease'
              }}>
                <i className="fas fa-envelope"></i>
                Contact Me
              </Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', marginBottom: '2rem' }}>
              <a href="tel:+33667316018" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="Phone">
                <i className="fas fa-phone"></i>
              </a>
              <a href="mailto:alan@alboudata.com" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/al-bou" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/al-bou" target="_blank" rel="noopener noreferrer" style={{
                color: 'white',
                fontSize: '24px',
                transition: 'all 0.3s ease'
              }} aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>

            <div style={{
              position: 'absolute',
              top: '20%',
              right: '10%',
              opacity: 0.1,
              fontSize: '120px',
              animation: 'fadeIn 2s ease-in-out'
            }}>
              <i className="fas fa-brain" style={{ color: '#8b2e8b' }}></i>
            </div>
          </div>

          {/* Profile Photo */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '6px solid #ff6b35',
              boxShadow: '0 15px 50px rgba(255, 107, 53, 0.4)',
              margin: '0 auto',
              transition: 'transform 0.3s ease'
            }} className="profile-image-hover">
              <Image
                src="/img/alan.png"
                alt="Alan BOUO - Data Science & AI Expert"
                width={320}
                height={320}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                priority
                aria-label="Professional headshot of Alan BOUO"
              />
            </div>
            <div style={{ marginTop: '2rem', opacity: 0.9, fontSize: '18px' }}>
              <i className="fas fa-map-marker-alt" style={{ marginRight: '0.5rem' }}></i>
              Lyon, France 🇫🇷
            </div>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Specializations
          </h2>

          <div className="specializations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Large Language Models Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #667eea',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-robot" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>Large Language Models (LLM)</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services" style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* Machine Learning & Data Science Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #28a745',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-brain" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>Machine Learning & Data Science</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services" style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* AI Technologies & Infrastructure Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #6c757d',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#6c757d',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>AI Technologies & Infrastructure</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services" style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* AI Ethics & Privacy Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #8b2e8b',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#8b2e8b',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-shield-alt" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>AI Ethics & Privacy</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/blog" style={{
                  backgroundColor: '#8b2e8b',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* AI Strategy & Business Intelligence Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #ff6b35',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ff6b35',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-chart-line" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>AI Strategy & Business Intelligence</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>

            {/* SEO & AI Search Solutions Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #007bff',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '280px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-search" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', margin: 0 }}>SEO & AI Search Solutions</h3>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link href="/services" style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realizations Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Key Realizations
          </h2>

          <div className="specializations-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {/* AI-Powered Energy Grid Optimization */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #667eea',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-bolt" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI-Powered Energy Grid Optimization</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Developed machine learning models to predict and optimize energy distribution networks, reducing operational costs by 15% and improving grid reliability for ENEDIS.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Machine Learning</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Time Series</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Predictive Analytics</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/energy-grid" style={{
                  backgroundColor: '#667eea',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* Self-Hosted AI Infrastructure */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #28a745',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Self-Hosted AI Infrastructure</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Designed and implemented privacy-first AI infrastructure using Kubernetes and Docker, enabling secure deployment of large language models while maintaining data sovereignty.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Kubernetes</span>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Docker</span>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Privacy-First</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/self-hosted-ai" style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* LLM Fine-Tuning Platform */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #6c757d',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#6c757d',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-robot" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>LLM Fine-Tuning Platform</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Built a comprehensive platform for fine-tuning large language models on domain-specific data, achieving 40% improvement in accuracy for specialized business applications.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f8f9fa', color: '#6c757d', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Fine-Tuning</span>
                  <span style={{ backgroundColor: '#f8f9fa', color: '#6c757d', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Transformers</span>
                  <span style={{ backgroundColor: '#f8f9fa', color: '#6c757d', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Domain Adaptation</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/llm-platform" style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* AI Ethics Compliance Framework */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #8b2e8b',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#8b2e8b',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-shield-alt" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI Ethics Compliance Framework</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Developed comprehensive AI governance framework ensuring ethical AI deployment, including bias detection, privacy protection, and regulatory compliance across enterprise applications.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>AI Ethics</span>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Bias Detection</span>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Compliance</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/ai-ethics" style={{
                  backgroundColor: '#8b2e8b',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* Multi-Chain AI Protocol */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #ff6b35',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ff6b35',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fab fa-ethereum" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>Multi-Chain AI Protocol</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Designed decentralized AI protocol enabling secure, interoperable AI model sharing across blockchain networks, enhancing privacy and reducing dependency on centralized providers.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#fff5f0', color: '#ff6b35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Blockchain</span>
                  <span style={{ backgroundColor: '#fff5f0', color: '#ff6b35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Decentralized</span>
                  <span style={{ backgroundColor: '#fff5f0', color: '#ff6b35', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Interoperability</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/multi-chain" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* AI-Powered SEO Analytics */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #007bff',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px'
            }}>
              <div style={{ textAlign: 'center', flex: 1, marginBottom: '2rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-search" style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem' }}>AI-Powered SEO Analytics</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Created intelligent SEO analysis system using NLP and machine learning to optimize content strategy, resulting in 300% improvement in organic search rankings for enterprise clients.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#007bff', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>NLP</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#007bff', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Content Strategy</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#007bff', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>Analytics</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/seo-analytics" style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block'
                }}>
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Education & Certifications
          </h2>

          <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-certificate" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Google Cybersecurity Professional Certificate</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>2024</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Training in cybersecurity, strengthening my skills in privacy and security for AI applications.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Certificate of Specialized Studies in Artificial Intelligence</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>Télécom Paris, France - 2020</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Advanced studies in AI, covering LLMs and neural networks.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Master of Science in Energy Systems Management</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>University College London, UK - 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Master's in energy systems management, with a focus on data and optimization.
              </p>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #667eea'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <i className="fas fa-graduation-cap" style={{ color: '#667eea', fontSize: '24px', marginRight: '1rem' }}></i>
                <div>
                  <h3 style={{ color: '#333', margin: 0 }}>Engineering Degree</h3>
                  <p style={{ color: '#667eea', margin: '0.5rem 0' }}>CentraleSupélec, France - 2011</p>
                </div>
              </div>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Engineering degree, solid foundation in mathematics and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Transform Your Business with AI?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Interested in collaboration? Contact me to discuss your AI projects and unlock your data potential.
          </p>
          <Link href="/contact" style={{
            backgroundColor: '#ff6b35',
            color: 'white',
            padding: '1.5rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fas fa-rocket"></i>
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
