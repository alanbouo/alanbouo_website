import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alan Bouo — Expert IA & cybersécurité qui construit en public',
  description: "Je construis des SaaS à revenus récurrents (MRR) en documentant tout en transparence. Expert IA & cybersécurité, je vulgarise l'intelligence artificielle et la sécurité pour le public francophone.",
  keywords: ['IA', 'intelligence artificielle', 'cybersécurité', 'SaaS', 'build in public', 'MRR', 'vulgarisation', 'francophone', 'Alan Bouo'],
  authors: [{ name: 'Alan Bouo' }],
  openGraph: {
    title: 'Alan Bouo — Expert IA & cybersécurité qui construit en public',
    description: "Je construis des SaaS à revenus récurrents en documentant tout en transparence. IA & cybersécurité vulgarisées pour le public francophone.",
    locale: 'fr_FR',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // A/B Testing variant for CTA buttons
  const ctaVariant = Math.random() < 0.5 ? 'demo' : 'audit';

  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Globaux pour analytics
              window.ctaVariant = "${ctaVariant}";

              // Matomo Analytics Initialization
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              _paq.push(['setCustomVariable', 3, "CTA_Variant", "${ctaVariant}", "visit"]);
              _paq.push(['setCustomVariable', 1, "Traffic_Source", document.referrer.includes('ilan.com') ? 'Organic' : 'Direct', "visit"]);

              // Matomo setup (replace with your actual instance)
              (function() {
                var u="//your-matomo-url/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />

        <main data-cta-variant={ctaVariant}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
