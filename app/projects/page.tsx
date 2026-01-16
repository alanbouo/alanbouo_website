'use client'

import Link from 'next/link'
import Image from 'next/image'
import projectsData from '../../data/projects.json'
import { useState } from 'react'

export default function ServicesPage() {
  const projectsPerPage = 6
  const [currentPage, setCurrentPage] = useState(1)
  const totalProjects = projectsData.length
  const totalPages = Math.ceil(totalProjects / projectsPerPage)

  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const displayedProjects = projectsData.slice(startIndex, endIndex)

  const goToPreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

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
            backgroundColor: '#FF9800',
            color: 'white',
            padding: '1.2rem 3rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            boxShadow: '0 8px 25px rgba(255, 152, 0, 0.5)',
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
            What is your favorite?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {displayedProjects.map((project) => {
              const tagBackgroundColor = project.id === 'tubechatai' ? '#fff0f0' :
                                       project.id === 'memomind' ? '#f0f4ff' :
                                       project.id === 'vibex' ? '#f0f9ff' :
                                       '#fdf2ff'

              const getIcon = (id: string) => {
                switch(id) {
                  case 'tubechatai':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )
                  case 'memomind':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                    )
                  case 'vibex':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )
                  case 'vigilai':
                    return (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )
                  default:
                    return null
                }
              }

              return (
                <div key={project.id} style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  transition: 'transform 0.3s ease',
                  border: `3px solid ${project.color}`
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      background: project.id === 'tubechatai' ? 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)' :
                                 project.id === 'memomind' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                                 project.id === 'vibex' ? 'linear-gradient(135deg, #1DA1F2 0%, #0d8ecf 100%)' :
                                 'linear-gradient(135deg, #8b2e8b 0%, #6f1e6f 100%)',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      boxShadow: `0 4px 15px ${project.color}4D`
                    }}>
                      {getIcon(project.id)}
                    </div>
                    <h3 style={{ color: '#333', marginBottom: '1rem', fontSize: '18px' }}>{project.title}</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem', fontSize: '14px' }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                      {project.tags.map((tag, index) => (
                        <span key={index} style={{
                          backgroundColor: tagBackgroundColor,
                          color: project.color,
                          padding: '0.25rem 0.5rem',
                          borderRadius: '10px',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <Link href={project.link} style={{
                      backgroundColor: '#FF9800',
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
              )
            })}
          </div>

          {/* Pagination Navigation */}
          {totalPages > 1 && (
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <button
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                  style={{
                    backgroundColor: currentPage === 1 ? '#e2e8f0' : '#667eea',
                    color: currentPage === 1 ? '#94a3b8' : 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '18px',
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: currentPage === 1 ? 'none' : '0 4px 15px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== 1) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = '#5a67d8'
                      target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== 1) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = '#667eea'
                      target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                    }
                  }}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <span style={{
                  color: '#666',
                  fontSize: '16px',
                  fontWeight: '500',
                  minWidth: '120px',
                  textAlign: 'center'
                }}>
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                  style={{
                    backgroundColor: currentPage === totalPages ? '#e2e8f0' : '#667eea',
                    color: currentPage === totalPages ? '#94a3b8' : 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '18px',
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: currentPage === totalPages ? 'none' : '0 4px 15px rgba(102, 126, 234, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== totalPages) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = '#5a67d8'
                      target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== totalPages) {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = '#667eea'
                      target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                    }
                  }}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* GitHub Backlog CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)',
        padding: '4rem 1rem',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Want to See What's Next?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Check out my GitHub project backlog to see upcoming AI initiatives and ongoing development work.
          </p>
          <a
            href="https://github.com/users/alanbouo/projects/1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#ffffff',
              color: '#24292e',
              padding: '1.5rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              const target = e.target as HTMLAnchorElement
              target.style.backgroundColor = '#f6f8fa'
              target.style.boxShadow = '0 12px 35px rgba(255, 255, 255, 0.4)'
            }}
            onMouseOut={(e) => {
              const target = e.target as HTMLAnchorElement
              target.style.backgroundColor = '#ffffff'
              target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)'
            }}
          >
            <i className="fab fa-github"></i>
            View My Backlog
          </a>
        </div>
      </section>
    </main>
  )
}
