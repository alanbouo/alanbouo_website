import type { Metadata } from 'next'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import SiteFrame from '@/components/SiteFrame'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Alan Bouo — Je construis des apps et j'explique l'IA et la cybersécurité",
  description: "Je construis des apps utiles et gratuites, et j'explique l'IA et la cybersécurité en chemin, simplement et sans jargon.",
  keywords: ['IA', 'intelligence artificielle', 'cybersécurité', 'vulgarisation', 'apps gratuites', 'Alan Bouo'],
  authors: [{ name: 'Alan Bouo' }],
  openGraph: {
    title: "Alan Bouo — Je construis des apps et j'explique l'IA et la cybersécurité",
    description: "Je construis des apps utiles et gratuites, et j'explique l'IA et la cybersécurité en chemin.",
    siteName: SITE_NAME,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Alan Bouo : des apps utiles, l'IA et la cybersécurité expliquées" }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body>
        <SiteFrame>
          {children}
        </SiteFrame>
        <Analytics />
      </body>
    </html>
  )
}
