import Link from 'next/link'
import { pageMetadata } from '@/lib/site'
import { AmstramPage, h2Style, linkStyle, pStyle, sectionStyle, ulStyle } from '../layout-parts'

export const metadata = pageMetadata({
  path: '/amstram/support',
  title: 'Amstram : aide et contact',
  description:
    "Comment jouer à Amstram, questions fréquentes et contact. How to play Amstram, FAQ and contact.",
})

const CONTACT = 'contact@alanbouo.com'

export default function AmstramSupportPage() {
  return (
    <AmstramPage title="Amstram" subtitle="Aide et contact · Help and contact">
      <section style={sectionStyle}>
        <h2 style={h2Style}>Comment jouer</h2>
        <p style={pStyle}>
          Chacun pose un doigt sur l'écran. Quand tout le monde est prêt, ne lâchez plus : les points respirent, puis
          Amstram désigne le ou les gagnants, ou forme les équipes. Levez tous les doigts pour rejouer.
        </p>
        <ul style={ulStyle}>
          <li>
            <strong>Tirage :</strong> de 1 à 3 gagnants, à choisir dans les réglages.
          </li>
          <li>
            <strong>Équipes :</strong> de 2 à 4 équipes, à un joueur près.
          </li>
          <li>
            <strong>Nombre de joueurs :</strong> jusqu'à 5 doigts sur iPhone, une limite d'iOS.
          </li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Questions fréquentes</h2>
        <p style={pStyle}>
          <strong>Je n'entends aucun son.</strong> Amstram respecte le mode silencieux de l'iPhone. Vérifiez aussi que
          les sons sont activés dans les réglages de l'app.
        </p>
        <p style={pStyle}>
          <strong>Les points disparaissent d'un coup.</strong> Le système a annulé les touches, souvent à cause d'un
          doigt de trop ou de la paume sur l'écran. Levez tous les doigts et recommencez.
        </p>
        <p style={pStyle}>
          <strong>Le tirage est-il équitable ?</strong> Oui : chaque doigt posé a la même chance, quel que soit l'ordre
          dans lequel il est arrivé.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>Contact</h2>
        <p style={pStyle}>
          Un problème ou une idée ? Écrivez à{' '}
          <a href={`mailto:${CONTACT}`} style={linkStyle}>
            {CONTACT}
          </a>
          . Amstram ne collecte aucune donnée : voir la{' '}
          <Link href="/amstram/confidentialite" style={linkStyle}>
            politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <hr style={{ margin: '2rem 0', border: 0, borderTop: '1px solid #ddd' }} />

      <div lang="en">
        <section style={sectionStyle}>
          <h2 style={h2Style}>How to play</h2>
          <p style={pStyle}>
            Everyone places a finger on the screen. Once everyone is ready, don't let go: the dots breathe, then Amstram
            picks the winner or winners, or makes the teams. Lift all fingers to play again.
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Pick:</strong> 1 to 3 winners, set in the settings.
            </li>
            <li>
              <strong>Teams:</strong> 2 to 4 teams, balanced to within one player.
            </li>
            <li>
              <strong>Players:</strong> up to 5 fingers on iPhone, an iOS limit.
            </li>
          </ul>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>FAQ</h2>
          <p style={pStyle}>
            <strong>I can't hear anything.</strong> Amstram respects the iPhone's silent mode. Also check that sounds are
            turned on in the app's settings.
          </p>
          <p style={pStyle}>
            <strong>All the dots suddenly disappear.</strong> The system cancelled the touches, often because of one
            finger too many or a palm on the screen. Lift all fingers and try again.
          </p>
          <p style={pStyle}>
            <strong>Is the draw fair?</strong> Yes: every finger has the same chance, whatever order it arrived in.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={h2Style}>Contact</h2>
          <p style={pStyle}>
            A problem or an idea? Write to{' '}
            <a href={`mailto:${CONTACT}`} style={linkStyle}>
              {CONTACT}
            </a>
            . Amstram collects no data: see the{' '}
            <Link href="/amstram/confidentialite" style={linkStyle}>
              privacy policy
            </Link>
            .
          </p>
        </section>
      </div>
    </AmstramPage>
  )
}
