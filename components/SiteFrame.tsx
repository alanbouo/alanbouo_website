'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'
import Footer from './Footer'

// Enveloppe le site avec la barre de navigation et le pied de page,
// SAUF sur l'éditeur Keystatic (/keystatic) qui occupe tout l'écran.
export default function SiteFrame({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (pathname?.startsWith('/keystatic')) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
