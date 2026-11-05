import Link from 'next/link'
import { pageMetadata } from '@/lib/site'
import { AmstramPage, h2Style, linkStyle, pStyle, sectionStyle, ulStyle } from '../layout-parts'

export const metadata = pageMetadata({
  path: '/amstram/confidentialite',
  title: 'Amstram : politique de confidentialité',
  description: "Amstram ne collecte aucune donnée personnelle : ni compte, ni mesure d'audience, ni publicité.",
})

const CONTACT = 'contact@alanbouo.com'

export default function AmstramPrivacyPage() {
  return (
    <AmstramPage title="Amstram" subtitle="Confidentialité · Privacy · 6 novembre 2026 / November 6, 2026">
      <section style={sectionStyle}>
        <h2 style={h2Style}>En bref</h2>
        <p style={pStyle}>
          Amstram ne collecte aucune donnée personnelle et n'envoie aucune donnée sur Internet. L'app fonctionne sans
          compte et sans connexion.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Ce qui reste sur votre appareil</h2>
        <p style={pStyle}>
          Vos réglages (nombre de gagnants et d'équipes, thème, sons et vibrations) sont enregistrés uniquement sur
          votre appareil. Ils disparaissent quand vous supprimez l'app. Les positions de vos doigts servent au tirage en
          cours et ne sont pas conservées.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Ce qu'Amstram ne fait pas</h2>
        <ul style={ulStyle}>
          <li>Pas de compte ni d'inscription.</li>
          <li>Pas de mesure d'audience, de publicité ni de suivi.</li>
          <li>Pas d'accès au micro, à la caméra, à la localisation, aux photos ou aux contacts.</li>
          <li>Pas d'achat dans l'app.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Apple</h2>
        <p style={pStyle}>
          Le téléchargement et les mises à jour passent par l'App Store, sous la responsabilité d'Apple. Si vous avez
          accepté de partager vos analyses avec les développeurs, Apple peut me transmettre des statistiques et des
          rapports de plantage. Ce réglage se gère dans celui de votre appareil.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Éditeur et contact</h2>
        <p style={pStyle}>
          Bouorakima Alandji (nom d'usage : Alan Bouo), entreprise individuelle, SIREN 983 135 179, 3 Place du Clot,
          07190 Saint-Pierreville, France. Pour toute question :{' '}
          <a href={`mailto:${CONTACT}`} style={linkStyle}>
            {CONTACT}
          </a>
          . Aide de l'app :{' '}
          <Link href="/amstram/support" style={linkStyle}>
            page d'aide
          </Link>
          . Le site alanbouo.com a sa propre{' '}
          <Link href="/privacy" style={linkStyle}>
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <hr style={{ margin: '2rem 0', border: 0, borderTop: '1px solid #ddd' }} />

      <div lang="en">
        <section style={sectionStyle}>
          <h2 style={h2Style}>In short</h2>
          <p style={pStyle}>
            Amstram collects no personal data and sends no data over the Internet. The app works without an account and
            without a connection.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>What stays on your device</h2>
          <p style={pStyle}>
            Your settings (number of winners and teams, theme, sounds and vibrations) are stored only on your device.
            They are removed when you delete the app. Your finger positions are used for the current draw and are not
            kept.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>What Amstram does not do</h2>
          <ul style={ulStyle}>
            <li>No account or sign-up.</li>
            <li>No analytics, advertising or tracking.</li>
            <li>No access to the microphone, camera, location, photos or contacts.</li>
            <li>No in-app purchases.</li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Apple</h2>
          <p style={pStyle}>
            Downloads and updates go through the App Store, under Apple's responsibility. If you agreed to share
            analytics with developers, Apple may send me statistics and crash reports. You control this in your device's
            settings.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Publisher and contact</h2>
          <p style={pStyle}>
            Bouorakima Alandji (known as Alan Bouo), sole proprietorship, SIREN 983 135 179, 3 Place du Clot, 07190
            Saint-Pierreville, France. Questions:{' '}
            <a href={`mailto:${CONTACT}`} style={linkStyle}>
              {CONTACT}
            </a>
            . App help:{' '}
            <Link href="/amstram/support" style={linkStyle}>
              help page
            </Link>
            .
          </p>
        </section>
      </div>
    </AmstramPage>
  )
}
