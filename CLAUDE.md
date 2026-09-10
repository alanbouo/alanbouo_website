# alanbouo_website

Site perso d'Alan Bouo (Next.js 14, App Router, sans Tailwind — CSS classique
dans `app/globals.css` + styles inline / `styled-jsx`).

## Direction artistique

Source de vérité et rationale complet : dépôt `alanbouo-pilotage`, fichier
`chaine.md` (section « Nom, identité visuelle, direction artistique ») et
`videos/da-pistes.html` pour le détail des pistes comparées. **Toute évolution
de la DA se décide là-bas d'abord**, puis se répercute ici — jamais l'inverse.

Valeurs telles qu'implémentées (`app/globals.css`, variables CSS `:root`) :

| Rôle | Variable CSS | Valeur |
|---|---|---|
| Fond sombre (hero, nav, footer) | `--primary-blue` | `#14181C` |
| Accent principal (CTA, liens, highlight) | `--cta-yellow` | `#C99A4E` (ambre) |
| Accent secondaire | `--tech-green` | `#5B7A87` (bleu-gris) |
| Police titres / repères | `--font-display` | JetBrains Mono |
| Police texte courant | `--font-body` | Libre Franklin |

Motif récurrent : crochets `[ ]` façon flag CLI autour des labels/eyebrows
(ex. `[ MA DÉMARCHE ]` sur la page d'accueil).

**Règles à respecter en modifiant le site :**
- Utiliser les variables CSS ci-dessus, jamais de hex en dur pour ces rôles.
- Les couleurs de marque tierces (YouTube rouge, X bleu, LinkedIn bleu,
  WhatsApp vert) dans `Footer.tsx` et `data/projects.json` sont volontairement
  hors DA — ce sont des identités externes, pas la charte du site.
- Les couleurs distinctives de catégorie (`lib/posts.ts`) et de projet
  (`data/projects.json`) qui ne sont pas héritées du cliché violet-bleu
  d'origine (#667eea/#764ba2) restent volontairement différenciées entre
  elles — ne pas toutes les uniformiser sur l'accent principal.
