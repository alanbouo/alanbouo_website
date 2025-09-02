'use client'

import { useState } from 'react'

interface Question {
  question: string
  options: { text: string, value: string, explanation: string }[]
  oliveAnalogy: string
}

export default function AIEthicsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')

  const questions: Question[] = [
    {
      question: "How mature is your current AI data privacy approach?",
      options: [
        {
          text: "🔒 Cloud-leaky infrastructure (API calls every minute)",
          value: "cloud-leaky",
          explanation: "Like an olive grove without irrigation, your data is vulnerable to drying out."
        },
        {
          text: "🌱 Locally pressed like olive oil (encrypted local processing)",
          value: "olive-pressed",
          explanation: "Perfect approach! Your data stays fresh and valuable, just like premium olive oil."
        },
        {
          text: "📊 External data sharing (regular API exports)",
          value: "external-sharing",
          explanation: "Consider harvesting locally - like olives aged with traditional methods."
        },
        {
          text: "❓ I'm not sure where my data goes",
          value: "unsure",
          explanation: "Let's clear the fog! Ethically-guided AI needs complete data transparency."
        }
      ],
      oliveAnalogy: "Mediterranean wisdom: The finest pressed oil comes from groves carefully tended for generations."
    },
    {
      question: "What 'soil' does your AI ethical framework grow from?",
      options: [
        {
          text: "🌿 Ethics-driven with balanced growth focus",
          value: "ethical-balance",
          explanation: "Excellent! Ethical AI requires nurturing the right conditions, like olive tree cultivation."
        },
        {
          text: "⚡ Performance-first, ethics second",
          value: "performance-first",
          explanation: "Consider the long-term harvest. Ethical decisions ensure sustainable AI growth."
        },
        {
          text: "💰 Cost-optimization primary",
          value: "cost-optimization",
          explanation: "Economic ecologists know that healthy ecosystems provide the best returns."
        },
        {
          text: "🎯 No specific ethical guidelines",
          value: "no-guidelines",
          explanation: "Like an untended grove, AI without ethics may produce bitter fruit."
        }
      ],
      oliveAnalogy: "Ancient olive farmers knew: Healthy soil yields fruit for centuries, not just this year's harvest."
    },
    {
      question: "How does your organization balance AI innovation with ethical harvesting?",
      options: [
        {
          text: "🌳 Sustainable: Privacy first, innovation second",
          value: "sustainable-balance",
          explanation: "Perfect balance! Like sustainable olive farming, ethical AI thrives for generations."
        },
        {
          text: "💨 Innovation race: Ethics may follow",
          value: "innovation-race",
          explanation: "Ethical AI needs time to mature, just like olive trees need years to bear fruit."
        },
        {
          text: "⚖️ Business balance: Value > Ethics",
          value: "business-balance",
          explanation: "Consider ethical foundations - they increase long-term business value."
        },
        {
          text: "🤔 New to ethical considerations",
          value: "new-to-ethics",
          explanation: "You're not alone! Many organizations start here, and that's completely fine."
        }
      ],
      oliveAnalogy: "Mediterranean groves teach us: Rushed harvesting yields bitter olives, patient nurturing creates golden oil."
    }
  ]

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value]
    setAnswers(newAnswers)
    setSelectedAnswer(value)

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer('')
      } else {
        setShowResult(true)
      }
    }, 1000) // Quick feedback delay, no external API calls
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
    setSelectedAnswer('')
  }

  if (showResult) {
    const ethicalScore = answers.filter(ans =>
      ['olive-pressed', 'ethical-balance', 'sustainable-balance'].includes(ans)
    ).length

    return (
      <div style={{
        backgroundColor: 'var(--white)',
        padding: '2.5rem',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        maxWidth: '700px',
        margin: '2rem auto',
        border: '3px solid var(--olive-green)',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {[...Array(ethicalScore)].map((_, i) => (
              <span key={i} style={{ color: 'var(--golden-yellow)' }}>🌿</span>
            ))}
            {[...Array(3 - ethicalScore)].map((_, i) => (
              <span key={i} style={{ color: 'var(--light-gray)' }}>🌱</span>
            ))}
          </div>

          <h2 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>
            Your AI Ethics Harvest Score
          </h2>

          <div style={{
            backgroundColor: ethicalScore >= 2 ? 'var(--olive-green)' : 'var(--golden-yellow)',
            color: ethicalScore >= 2 ? 'var(--white)' : 'var(--deep-blue)',
            padding: '1rem 2rem',
            borderRadius: '15px',
            margin: '1rem 0',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            {ethicalScore}/3 Privacy Maturity
          </div>

          <p style={{
            fontSize: '18px',
            fontStyle: 'italic',
            fontFamily: 'Pacifico, cursive',
            color: 'var(--olive-green)',
            marginTop: '1rem'
          }}>
            {ethicalScore >= 2
              ? "Excellent! Your AI grove is ready for ethical harvest 🌿"
              : "Time to cultivate stronger ethical foundations 💚"
            }
          </p>
        </div>

        <div style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h3 style={{ color: 'var(--deep-blue)', marginBottom: '1rem' }}>Your Path Forward:</h3>
          <ul style={{ lineHeight: '1.6', paddingLeft: '1.5rem' }}>
            {ethicalScore >= 2 ? (
              <>
                <li>🇫🇷 Implement structural self-hosting architecture</li>
                <li>🌿 Refine ethical oversight committee practices</li>
                <li>🎯 Expand privacy-first innovation across teams</li>
              </>
            ) : (
              <>
                <li>🏗️ Start with basic privacy audit (our free service!)</li>
                <li>📚 Study ethical AI frameworks (check our blog)</li>
                <li>🚀 Plan migration to self-hosted infrastructure</li>
              </>
            )}
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={resetQuiz}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--olive-green)',
              color: 'var(--white)',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-redo" style={{ marginRight: '0.5rem' }}></i>
            Retake Quiz
          </button>
          <a
            href="/services"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'var(--golden-yellow)',
              color: 'var(--deep-blue)',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <i className="fas fa-seedling" style={{ marginRight: '0.5rem' }}></i>
            Book Private Audit
          </a>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div style={{
      backgroundColor: 'var(--white)',
      padding: '2.5rem',
      borderRadius: '20px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      maxWidth: '700px',
      margin: '2rem auto',
      border: '3px solid var(--olive-green)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <i className="fas fa-brain" style={{ fontSize: '32px', color: 'var(--olive-green)', marginRight: '1rem' }}></i>
        <div>
          <h3 style={{ color: 'var(--deep-blue)', fontSize: '24px', margin: 0 }}>
            AI Ethics Quiz: Question {currentQuestion + 1}/3
          </h3>
          <div style={{ fontSize: '14px', color: 'var(--text-color)', marginTop: '0.5rem' }}>
            <i className="fas fa-shield-alt" style={{ color: 'var(--olive-green)', marginRight: '0.5rem' }}></i>
            Self-hosted processing (no external APIs)
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '1.5rem', fontWeight: '500' }}>
          {currentQ.question}
        </p>

        <div style={{ display: 'grid', gap: '0.75rem' }}>
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              disabled={selectedAnswer !== ''}
              style={{
                padding: '1rem 1.5rem',
                border: selectedAnswer === option.value
                  ? '2px solid var(--golden-yellow)'
                  : selectedAnswer && selectedAnswer === option.value
                    ? '2px solid var(--olive-green)'
                    : '2px solid var(--light-gray)',
                borderRadius: '12px',
                backgroundColor: selectedAnswer === option.value
                  ? 'var(--olive-green)'
                  : selectedAnswer === option.value !== false && selectedAnswer !== ''
                    ? '#f8f9fa'
                    : 'var(--white)',
                color: selectedAnswer === option.value ? 'var(--white)' : 'var(--text-color)',
                fontSize: '16px',
                textAlign: 'left',
                cursor: selectedAnswer !== '' ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                width: '100%'
              }}
              className={selectedAnswer === '' ? 'quiz-option' : ''}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {selectedAnswer && (
        <div style={{
          backgroundColor: 'var(--light-gray)',
          padding: '1.5rem',
          borderRadius: '12px',
          marginTop: '2rem',
          borderLeft: '4px solid var(--golden-yellow)',
          opacity: 0,
          animation: 'fadeIn 0.5s ease 0.5s forwards'
        }}>
          <div style={{ fontSize: '14px', color: 'var(--text-color)', fontWeight: 'bold' }}>
            <i className="fas fa-lightbulb" style={{ marginRight: '0.5rem', color: 'var(--olive-green)' }}></i>
            Ethical Insight:
          </div>
          <p style={{ marginTop: '0.5rem', lineHeight: '1.5' }}>
            {currentQ.options.find(opt => opt.value === selectedAnswer)?.explanation}
          </p>
        </div>
      )}

      {!selectedAnswer && (
        <div style={{
          fontSize: '16px',
          fontStyle: 'italic',
          color: 'var(--olive-green)',
          marginTop: '1.5rem',
          fontFamily: 'Pacifico, cursive',
          opacity: 0.8
        }}>
          💬 "{currentQ.oliveAnalogy}"
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .quiz-option:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  )
}
