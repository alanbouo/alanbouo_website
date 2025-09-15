import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Matomo Analytics Placeholder - Self-hosted tracking
// Replace 'YOUR_MATOMO_URL' and 'YOUR_SITE_ID' with your actual Matomo installation
{`
(function() {
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//YOUR_MATOMO_URL/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', 'YOUR_SITE_ID']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
})();

// Track conversions to services/blog with 60%+ from homepage
_paq.push(['setCustomVariable', 1, "Traffic_Source", "Homepage_Hero", "page"]);
_paq.push(['setCustomVariable', 2, "Target_Path", "Services_Blog", "page"]);

// A/B Testing for CTA buttons
window.ctaVariant = Math.random() < 0.5 ? 'Book_Demo' : 'Book_Audit';
_paq.push(['setCustomVariable', 3, "CTA_Variant", window.ctaVariant, "page"]);
`}

export const metadata: Metadata = {
  title: 'Alanbouo - Self-Hosted AI Consultant for Privacy & Control',
  description: 'Empowering businesses with self-hosted AI solutions for maximum privacy, data control, and cost efficiency. Expert consultation on cloud-to-self migration and AI ethics audits.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // A/B Testing variant for CTA buttons
  const ctaVariant = Math.random() < 0.5 ? 'demo' : 'audit';

  return (
    <html lang="en">
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
