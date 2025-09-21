import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'AI Products & Projects - Alan Bou Data Science & AI Expert',
  description: 'Explore my shipped AI products and projects: predictive analytics, self-hosted AI systems, LLM chatbots, and innovative AI solutions with measurable business impact.'
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.2', fontWeight: 'bold' }}>
            AI & Data Products
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', marginBottom: '3rem', opacity: 0.9 }}>
            Check out what I have been up to.
          </p>
          <Link href="/contact" style={{
            backgroundColor: '#ff6b35',
            color: 'white',
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 8px 25px rgba(255, 107, 53, 0.5)',
            transition: 'all 0.3s ease'
          }}>
            <i className="fas fa-calendar"></i>
            Get in Touch
          </Link>
        </div>
      </section>



      {/* Key Achievements & Shipped Products Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>
            Shipped Products
          </h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#666', fontSize: '18px' }}>
            What is your favorite ?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* AI Predictive Analytics Solution */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #28a745'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-chart-bar" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>AI Predictive Analytics Solution</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Shipped a predictive model improving operational efficiency by measurable percentages, using advanced timeseries analysis.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Efficiency +X%</span>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Timeseries</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/predictive-analytics" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* Self-Hosted AI Deployment */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #667eea'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-server" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>Self-Hosted AI Deployment</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Delivered a Kubernetes-based self-hosted system, enhancing data control and security by significant percentages.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Security +X%</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Kubernetes</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/self-hosted-ai" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* NLP-Powered SEO Tool */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #8b2e8b'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#8b2e8b',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-search" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>NLP-Powered SEO Tool</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Shipped an AI tool boosting search rankings by significant percentages through intelligent content analysis.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Ranking +X%</span>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>NLP</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/seo-tool" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* LLM Chatbot Product */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #28a745'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-robot" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>LLM Chatbot Product</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Developed an LLM chatbot reducing response time by measurable percentages for enterprise applications.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Response -X%</span>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>LLM</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/llm-chatbot" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
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
              border: '3px solid #667eea'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-shield-alt" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>AI Ethics Compliance Framework</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Implemented a privacy-first system achieving full compliance standards and ethical AI governance.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>100% Compliance</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Ethics</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/ai-ethics" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
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
              border: '3px solid #8b2e8b'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#8b2e8b',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fab fa-ethereum" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>Multi-Chain AI Protocol</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Shipped interoperable AI networks improving scalability and decentralization by significant percentages.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Scalability +X%</span>
                  <span style={{ backgroundColor: '#fdf2ff', color: '#8b2e8b', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Blockchain</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/multi-chain" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* Risk Prediction Model */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #28a745'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-chart-area" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>Risk Prediction Model</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Delivered an AI model cutting operational risks by measurable percentages through advanced analytics.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Risk -X%</span>
                  <span style={{ backgroundColor: '#f0fff0', color: '#28a745', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Analytics</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/risk-model" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>

            {/* AI SEO Integration Tool */}
            <div style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '3px solid #667eea'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <i className="fas fa-search-plus" style={{ fontSize: '20px', color: 'white' }}></i>
                </div>
                <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>AI SEO Integration Tool</h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                  Developed an AI-enhanced SEO strategy improving online performance by significant percentages.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>Performance +X%</span>
                  <span style={{ backgroundColor: '#f0f8ff', color: '#667eea', padding: '0.25rem 0.5rem', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>SEO</span>
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/projects/seo-integration" style={{
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  display: 'inline-block',
                  fontSize: '14px'
                }}>
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Call to Action & Footer */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Transform Your Business with AI?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Ready to harness AI for your data? Let's discuss your goals today—contact me now.
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
