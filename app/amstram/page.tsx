import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata({
  path: '/amstram',
  title: 'Amstram : le tirage au sort avec les doigts',
  description:
    "Chacun pose un doigt sur l'écran, Amstram désigne un gagnant ou forme les équipes. App iPhone et iPad, sans compte, sans publicité, sans achat.",
})

// À renseigner à la publication : le bouton remplace alors la mention « Bientôt ».
const APP_STORE_URL: string | null = null

// Couleurs de l'app, volontairement hors de la charte du site (voir CLAUDE.md).
const INK = '#1A1A2E'
const ROSE = '#FF6B9D'
const CREAM = '#F5F2EC'

const STEPS = [
  { title: 'Posez vos doigts', text: "Un doigt par personne, sur le même écran, à partir de deux joueurs." },
  { title: 'Ne lâchez pas', text: 'Les points respirent, le roulement de tambour monte. Un retardataire peut encore entrer.' },
  { title: 'Le hasard tranche', text: 'Les perdants disparaissent, le ou les gagnants restent. Levez les doigts pour rejouer.' },
]

const FEATURES = [
  { title: '1 à 3 gagnants', text: 'Qui commence, qui paie, qui fait la vaisselle.' },
  { title: '2 à 4 équipes', text: 'Réparties au hasard, à un joueur près, chacune avec sa couleur.' },
  { title: 'Un tirage équitable', text: "Chaque doigt a la même chance, quel que soit l'ordre d'arrivée." },
  { title: 'Sons et vibrations', text: 'À couper dans les réglages. Le mode silencieux est respecté.' },
  { title: 'Quatre thèmes', text: 'Violet, vert, orange ou sombre.' },
  { title: 'Français et anglais', text: "L'app suit la langue de votre appareil." },
]

function DrawIllustration() {
  const losers = [
    { x: 62, y: 130, color: '#4ECDC4' },
    { x: 162, y: 172, color: '#FFE66D' },
    { x: 58, y: 372, color: '#AA96DA' },
  ]
  return (
    <svg viewBox="0 0 240 460" role="img" aria-label="Illustration : trois doigts perdent, un doigt gagne" style={{ width: 'min(240px, 60vw)', height: 'auto' }}>
      <defs>
        <linearGradient id="amstram-theme" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#667EEA" />
          <stop offset="0.55" stopColor="#764BA2" />
          <stop offset="1" stopColor="#F093FB" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="232" height="452" rx="34" fill="#0F0F1A" />
      <rect x="14" y="14" width="212" height="432" rx="25" fill="url(#amstram-theme)" />
      {losers.map((dot) => (
        <circle key={dot.x} cx={dot.x} cy={dot.y} r="17" fill="none" stroke={dot.color} strokeWidth="4" opacity="0.55" />
      ))}
      <circle cx="154" cy="290" r="62" fill="none" stroke={ROSE} strokeWidth="3" opacity="0.5" />
      <circle cx="154" cy="290" r="38" fill={ROSE} opacity="0.35" />
      <circle cx="154" cy="290" r="38" fill="none" stroke={ROSE} strokeWidth="6" />
      <circle cx="154" cy="290" r="15" fill="#fff" />
    </svg>
  )
}

export default function AmstramPage() {
  return (
    <main style={{ fontFamily: 'var(--font-body)', color: 'var(--text-color)' }}>
      <section style={{ background: INK, color: CREAM, padding: 'clamp(3rem, 8vw, 5.5rem) 1rem' }}>
        <div style={heroGrid}>
          <div style={{ flex: '1 1 320px', maxWidth: 520 }}>
            <Image src="/amstram/icon.png" alt="" width={84} height={84} style={{ borderRadius: 19, display: 'block' }} />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 8vw, 4.25rem)', lineHeight: 1.05, margin: '1.25rem 0 1rem', color: CREAM }}>
              Amstram
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 3vw, 1.6rem)', lineHeight: 1.35, margin: '0 0 1rem', fontWeight: 600 }}>
              Qui commence ? Posez vos doigts, le hasard décide.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: '0 0 1.75rem', opacity: 0.85 }}>
              Le am-stram-gram de la famille, sur iPhone et iPad : un gagnant ou des équipes, en quelques secondes.
              Sans publicité, sans pistage, aucune donnée collectée.
            </p>
            {APP_STORE_URL ? (
              <a href={APP_STORE_URL} style={storeButton}>Télécharger sur l'App Store</a>
            ) : (
              <span style={{ ...storeButton, background: 'transparent', color: CREAM, border: `2px solid ${ROSE}` }}>Bientôt sur l'App Store</span>
            )}
          </div>
          <DrawIllustration />
        </div>
      </section>

      <section style={band}>
        <div style={container}>
          <h2 style={h2}>Une partie, trois gestes</h2>
          <ol style={{ ...cardGrid, listStyle: 'none', padding: 0, margin: 0 }}>
            {STEPS.map((step, index) => (
              <li key={step.title} style={card}>
                <span style={{ fontFamily: 'var(--font-display)', color: '#B8326B', fontWeight: 700 }}>{index + 1}</span>
                <h3 style={h3}>{step.title}</h3>
                <p style={cardText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ ...band, background: 'var(--light-gray)' }}>
        <div style={container}>
          <h2 style={h2}>Ce qu'il y a dedans</h2>
          <div style={cardGrid}>
            {FEATURES.map((feature) => (
              <div key={feature.title} style={card}>
                <h3 style={{ ...h3, marginTop: 0 }}>{feature.title}</h3>
                <p style={cardText}>{feature.text}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: '1.5rem 0 0', fontSize: 15, lineHeight: 1.6 }}>
            Sur iPhone, le jeu se limite à 5 doigts à la fois : c'est une limite d'iOS.
          </p>
        </div>
      </section>

      <section style={{ background: INK, color: CREAM, padding: '3.5rem 1rem' }}>
        <div style={container}>
          <h2 style={{ ...h2, color: CREAM }}>Aucune donnée collectée</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, maxWidth: 680, margin: '0 0 1.5rem' }}>
            Pas de publicité, pas de pistage, pas de compte, pas d'achat dans l'app. Amstram fonctionne sans connexion,
            et vos réglages restent sur votre appareil. Rien ne quitte le téléphone ou la tablette.
          </p>
          <p style={{ margin: 0, display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/amstram/support" style={darkLink}>Aide et contact</Link>
            <Link href="/amstram/confidentialite" style={darkLink}>Confidentialité</Link>
          </p>
        </div>
      </section>
    </main>
  )
}

const heroGrid: CSSProperties = { maxWidth: 1000, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center', justifyContent: 'space-between' }
const container: CSSProperties = { maxWidth: 1000, margin: '0 auto' }
const band: CSSProperties = { padding: '3.5rem 1rem', background: '#fff' }
const h2: CSSProperties = { fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', lineHeight: 1.2, margin: '0 0 1.5rem', color: 'var(--text-color)' }
const h3: CSSProperties = { fontSize: 18, margin: '0.5rem 0 0.4rem', color: 'var(--text-color)' }
const cardGrid: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }
const card: CSSProperties = { background: '#fff', border: '1px solid #E3E3E8', borderRadius: 12, padding: '1.25rem' }
const cardText: CSSProperties = { margin: 0, fontSize: 15, lineHeight: 1.55 }
const storeButton: CSSProperties = { display: 'inline-block', background: ROSE, color: INK, padding: '0.85rem 1.5rem', borderRadius: 999, fontWeight: 700, textDecoration: 'none' }
const darkLink: CSSProperties = { color: CREAM, textDecoration: 'underline' }
