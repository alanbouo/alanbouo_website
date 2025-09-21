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
            What is your favorite?
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {displayedProjects.map((project) => {
              const iconPrefix = project.icon === 'ethereum' ? 'fab' : 'fas'
              const tagBackgroundColor = project.color === '#28a745' ? '#f0fff0' :
                                       project.color === '#667eea' ? '#f0f8ff' :
                                       '#fdf2ff'

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
                      width: '50px',
                      height: '50px',
                      backgroundColor: project.color,
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem'
                    }}>
                      <i className={`${iconPrefix} fa-${project.icon}`} style={{ fontSize: '20px', color: 'white' }}></i>
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
