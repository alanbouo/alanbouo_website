import Link from 'next/link'

export const metadata = {
  title: 'Politique de confidentialité - Alan Bouo',
  description:
    "Découvrez comment Alan Bouo protège votre vie privée. Cette politique explique ce qui est collecté, comment c'est utilisé, la conservation des données, vos droits, les cookies/analytics, et comment nous contacter.",
}

export default function PrivacyPage() {
  return (
    <main style={{ backgroundColor: '#f9f9f9', padding: '2rem 1rem', minHeight: '100vh' }}>
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: '#fff',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          borderRadius: '5px',
          padding: '20px',
          fontFamily: 'Inter, sans-serif',
          lineHeight: 1.6,
          color: '#333',
          fontSize: '16px',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ color: '#2c3e50', marginBottom: '0.5rem', fontWeight: 700, fontSize: 'clamp(48px, 6vw, 60px)', fontFamily: 'Inter, sans-serif' }}>Politique de confidentialité</h1>
          <p style={{ color: '#2c3e50', fontSize: 'clamp(16px, 2vw, 18px)', fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>Dernière mise à jour : 23 septembre 2025</p>
        </header>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>1. Introduction</h2>
          <p style={pStyle}>
            Votre vie privée compte. Cette politique de confidentialité explique comment ce site collecte, utilise et
            protège vos informations, dans le respect de pratiques modernes et respectueuses de la vie privée, alignées
            avec l'éthique de l'IA et des données.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>2. Informations que nous collectons</h2>
          <p style={pStyle}>Nous ne collectons que ce qui est nécessaire au fonctionnement de ce site et à nos échanges avec vous :</p>
          <ul style={ulStyle}>
            <li>
              <strong>Coordonnées :</strong> si vous nous écrivez ou réservez un rendez-vous, nous recevons votre nom et votre adresse e-mail.
            </li>
            <li>
              <strong>Newsletter :</strong> si vous vous inscrivez, nous conservons votre adresse e-mail pour vous envoyer des mises à jour. Vous pouvez vous désinscrire à tout moment.
            </li>
            <li>
              <strong>Statistiques de base :</strong> des données d'usage anonymes (pages vues, référents, etc.) pour améliorer le contenu et l'expérience utilisateur. Aucun profil personnel n'est constitué.
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>3. Comment nous utilisons vos informations</h2>
          <p style={pStyle}>Nous utilisons vos informations aux fins suivantes :</p>
          <ul style={ulStyle}>
            <li>Répondre à vos demandes et fournir les informations ou services demandés.</li>
            <li>Envoyer les mises à jour de la newsletter si vous y avez souscrit.</li>
            <li>Analyser les tendances d'usage anonymes afin d'améliorer les performances et le contenu du site.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>4. Conservation des données</h2>
          <p style={pStyle}>
            Les coordonnées ne sont conservées que le temps nécessaire pour répondre à vos demandes ou maintenir un
            échange professionnel en cours. Les données de newsletter sont conservées jusqu'à votre désinscription. Les
            statistiques anonymes ne contiennent aucune information permettant de vous identifier.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>5. Vos droits</h2>
          <p style={pStyle}>Selon votre juridiction, vous pouvez disposer des droits suivants :</p>
          <ul style={ulStyle}>
            <li>Accéder aux informations personnelles que nous détenons à votre sujet.</li>
            <li>Demander la correction ou la suppression de vos données.</li>
            <li>Vous opposer à certains traitements ou retirer votre consentement à tout moment.</li>
          </ul>
          <p style={pStyle}>
            Pour exercer vos droits, écrivez à{' '}
            <a href="mailto:contact@alanbouo.com" style={linkStyle}>
              contact@alanbouo.com
            </a>
            .
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>6. Cookies & Analytics</h2>
          <p style={pStyle}>
            Ce site peut utiliser un outil d'analyse respectueux de la vie privée pour comprendre l'usage des pages. Les
            données sont agrégées et anonymisées. Les cookies éventuellement présents sont minimaux et servent
            uniquement aux fonctionnalités essentielles ou aux préférences de consentement.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>7. Sécurité des données</h2>
          <p style={pStyle}>
            Des mesures techniques et organisationnelles raisonnables sont mises en œuvre pour protéger les informations
            contre tout accès ou divulgation non autorisés. Cependant, aucune méthode de transmission sur Internet n'est
            sécurisée à 100 %.
          </p>
        </section>

        <section style={{ marginBottom: '1.25rem' }}>
          <h2 style={sectionHeadingStyle}>8. Nous contacter</h2>
          <p style={pStyle}>
            Pour toute question ou demande liée à cette politique de confidentialité, contactez-nous :
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>E-mail :</strong>{' '}
              <a href="mailto:contact@alanbouo.com" style={linkStyle}>
                contact@alanbouo.com
              </a>
            </li>
          </ul>
          <div style={{ marginTop: '1rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                background: '#DAA520',
                color: '#001F3F',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                fontWeight: 700,
              }}
            >
              Page de contact
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

/* Inline style helpers */
const sectionHeadingStyle: React.CSSProperties = {
  color: '#34495e',
  fontWeight: 500,
  fontSize: 'clamp(24px, 4vw, 32px)',
  margin: 0,
  marginBottom: '0.5rem',
  fontFamily: 'Inter, sans-serif',
}

const pStyle: React.CSSProperties = {
  margin: 0,
  marginBottom: '15px',
  fontSize: '16px',
  lineHeight: '1.6',
  fontFamily: 'Inter, sans-serif',
}

const ulStyle: React.CSSProperties = {
  margin: 0,
  paddingLeft: '1.25rem',
  marginBottom: '15px',
  fontFamily: 'Inter, sans-serif',
}

const linkStyle: React.CSSProperties = {
  color: '#34495e',
  textDecoration: 'underline',
  fontFamily: 'Inter, sans-serif',
}
