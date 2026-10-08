// Source unique de l'adresse canonique du site et des métadonnées de page.
// Vercel redirige alanbouo.com vers www.alanbouo.com : tout (canonical, sitemap,
// robots, RSS, Open Graph, JSON-LD) doit pointer sur ce même hôte. Pour changer
// d'hôte préféré, modifier SITE_URL ici ET le sens de la redirection dans Vercel.
import type { Metadata } from 'next'

export const SITE_URL = 'https://www.alanbouo.com'
export const SITE_NAME = 'Alan Bouo — Expert IA & cybersécurité'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`
const OG_IMAGE_ALT = 'Alan Bouo : IA & cybersécurité, construit en public'

export const SOCIAL_PROFILES = [
  'https://www.youtube.com/@alanbouo',
  'https://x.com/alanbouo',
  'https://linkedin.com/in/alanbouo',
  'https://github.com/alanbouo',
  'https://substack.com/@alanbouo',
]

// `path` : chemin de la page ('/', '/about'...). Sert au canonical et à og:url.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  }
}
