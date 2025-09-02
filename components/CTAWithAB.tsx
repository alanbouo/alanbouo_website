'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// Déclaration des types pour les propriétés Matomo et A/B Testing
declare global {
  interface Window {
    ctaVariant?: string
    _paq?: any[]
  }
}

interface CTAWithABProps {
  href: string
  className?: string
  children?: React.ReactNode
}

export default function CTAWithAB({ href, className, children }: CTAWithABProps) {
  const [ctaText, setCtaText] = useState(children)
  const [ctaClass, setCtaClass] = useState(className)

  useEffect(() => {
    // A/B Testing logic - runs only on client
    if (typeof window !== 'undefined') {
      const variant = window.ctaVariant || 'audit'

      if (variant === 'harvest') {
        setCtaText('Harvest Your AI Potential')
        setCtaClass((className || '') + ' ab-harvest')
      } else {
        setCtaText('Book a Free AI Audit')
        setCtaClass((className || '') + ' ab-audit')
      }

      // Track CTA visibility with Matomo
      if (window._paq) {
        window._paq.push(['trackEvent', 'CTA_Display', variant, href])
      }
    }
  }, [className, children, href])

  return (
    <Link
      href={href}
      className={ctaClass}
      onClick={() => {
        // Track CTA click with variant
        if (typeof window !== 'undefined' && window._paq) {
          const link = document.querySelector(`.${ctaClass?.split(' ').find(c => c.startsWith('ab-'))}`)
          if (link) {
            window._paq.push(['trackLink', href, 'CTA_' + (window.ctaVariant || 'audit')])
          }
        }
      }}
      style={{
        display: 'inline-block',
        marginBottom: '2rem'
      }}
    >
      {ctaText}
    </Link>
  )
}
