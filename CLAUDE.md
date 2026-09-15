# alanbouo_website

Site perso d'Alan Bouo (Next.js 14, App Router, sans Tailwind — CSS classique
dans `app/globals.css` + styles inline / `styled-jsx`).

## Direction artistique

**Source unique des valeurs** : dépôt `alanbouo-pilotage`, fichier `chaine.md`,
entrée « Direction artistique » des décisions prises. Rationale et pistes
comparées dans `videos/da-pistes.html`. **Toute évolution de la DA se décide
là-bas d'abord**, puis se répercute ici — jamais l'inverse.

Les valeurs ne sont pas recopiées ici : elles ne vivent qu'à deux endroits,
`chaine.md` qui fait foi et `app/globals.css` (`:root`) qui les implémente.
Correspondance des variables CSS :

| Rôle | Variable CSS |
|---|---|
| Fond sombre (hero, nav, footer) | `--primary-blue` |
| Surface sombre alternative | `--surface-dark-alt` |
| Accent principal (CTA, liens, highlight) | `--cta-yellow` |
| Accent secondaire | `--tech-green` |
| Police titres / repères | `--font-display` |
| Police texte courant | `--font-body` |

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
