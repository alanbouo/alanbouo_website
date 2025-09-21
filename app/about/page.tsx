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

      {/* Professional Experience Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Professional Experience
          </h2>

          <div className="timeline" style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div className="timeline-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: '#667eea',
              transform: 'translateX(-50%)'
            }}></div>

            {/* Experience Items */}
            <div style={{ marginBottom: '4rem', position: 'relative' }}>
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                width: '20px',
                height: '20px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}></div>
              <div className="timeline-item" style={{
                width: '45%',
                marginLeft: '5%',
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#333', margin: 0, marginRight: '1rem' }}>Data Science Manager</h3>
                  <span style={{ color: '#667eea', fontSize: '14px' }}>🇫🇷</span>
                </div>
                <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>ENEDIS, France</h4>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '1rem' }}>2018 - 2024</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Management of a team of 50 data scientists
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Client relationship management and projects
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Improvement of organizational processes
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Led AI initiatives to optimize energy networks, integrating privacy and ethics aspects
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ marginBottom: '4rem', position: 'relative' }}>
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                width: '20px',
                height: '20px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}></div>
              <div className="timeline-item" style={{
                width: '45%',
                marginLeft: '50%',
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#333', margin: 0, marginRight: '1rem' }}>Senior Datascientist</h3>
                  <span style={{ color: '#667eea', fontSize: '14px' }}>🇫🇷</span>
                </div>
                <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>ENEDIS, France</h4>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '1rem' }}>2013 - 2018</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Conducting statistical studies and developing decision-aid algorithms
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Focus on massive data analysis for immediate efficiency gains
                  </li>
                </ul>
              </div>
            </div>

            <div style={{ marginBottom: '4rem', position: 'relative' }}>
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '50%',
                top: '2rem',
                width: '20px',
                height: '20px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1
              }}></div>
              <div className="timeline-item" style={{
                width: '45%',
                marginLeft: '5%',
                backgroundColor: '#f8f9fa',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#333', margin: 0, marginRight: '1rem' }}>Datascientist</h3>
                  <span style={{ color: '#667eea', fontSize: '14px' }}>🇬🇧</span>
                </div>
                <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>RISK AND POLICY ANALYSTS LTD, UK</h4>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '1rem' }}>2012 - 2013</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Modeling and statistical studies for risk analyses
                  </li>
                  <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                    <i className="fas fa-circle" style={{ color: '#28a745', fontSize: '8px', marginRight: '0.5rem' }}></i>
                    Applying advanced machine learning methods
                  </li>
                </ul>
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

      {/* Languages & Personal Interests Section */}
      <section style={{ padding: '4rem 1rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '3rem', color: '#333' }}>
            Languages & Personal Interests
          </h2>

          <div className="languages-interests" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Languages</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>🇫🇷</span>
                  <span>French (Native)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>🇬🇧</span>
                  <span>English (C1)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ marginRight: '0.5rem' }}>🇪🇸</span>
                  <span>Spanish (A2)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>Interests</h3>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                  <i className="fas fa-brain" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                  Exploring the latest advances in self-hosted AI
                </li>
                <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                  <i className="fas fa-blog" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                  Blogging on AI ethics
                </li>
                <li style={{ marginBottom: '0.5rem', color: '#666' }}>
                  <i className="fas fa-plane" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                  Traveling to inspire new data ideas
                </li>
              </ul>
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
