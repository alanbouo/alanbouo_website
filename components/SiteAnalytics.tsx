'use client'

import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next'

// Une app renvoie vers le site avec `?from=<app>` (ex. /?from=amstram).
// La visite est enregistrée sous /from/<app>, qui apparaît comme une ligne à part
// dans le panneau Pages de Vercel : c'est le compte des visiteurs venus de l'app.
// Rien n'est collecté dans l'app ; seule l'adresse de la visite change ici.
const FROM = /^[a-z0-9-]{1,40}$/

function beforeSend(event: BeforeSendEvent): BeforeSendEvent {
  try {
    const url = new URL(event.url)
    const from = url.searchParams.get('from')?.toLowerCase()
    if (from && FROM.test(from)) {
      return { ...event, url: `${url.origin}/from/${from}` }
    }
  } catch {
    // Adresse illisible : on envoie l'événement tel quel.
  }
  return event
}

export default function SiteAnalytics() {
  return <Analytics beforeSend={beforeSend} />
}
