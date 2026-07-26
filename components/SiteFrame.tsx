'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

// Enveloppe le site avec la barre de navigation et le pied de page,
// SAUF sur l'éditeur Keystatic (/keystatic) qui occupe tout l'écran.
export default function SiteFrame({
  children,
  ctaVariant,
}: {
  children: React.ReactNode
  ctaVariant: string
}) {
  const pathname = usePathname()

  if (pathname?.startsWith('/keystatic')) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main data-cta-variant={ctaVariant}>{children}</main>
      <Footer />
    </>
  )
}
