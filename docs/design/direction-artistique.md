# Direction artistique — alanbouo.com

Source de vérité des **valeurs** : dépôt `alanbouo-pilotage`, `chaine.md`,
entrée « Direction artistique ». Ce fichier décrit les **usages**, pas les
valeurs : celles-ci ne vivent qu'à deux endroits, `chaine.md` (qui fait foi) et
`app/globals.css` (`:root`) qui les implémente — et que ce design system
publie tel quel.

## Rôles des variables

| Rôle | Variable |
|---|---|
| Fond sombre (hero, nav, footer) | `--primary-blue` |
| Surface sombre alternative | `--surface-dark-alt` |
| Accent principal (CTA, liens, highlight) | `--cta-yellow` |
| Accent secondaire | `--tech-green` |
| Texte courant sur fond clair | `--text-color` |
| Fond clair / surface neutre | `--white`, `--light-gray` |
| Police titres et repères | `--font-display` (monospace) |
| Police texte courant | `--font-body` |

**Jamais de hex en dur pour ces rôles** — toujours `var(--…)`.

## Registre

Presque-noir opérationnel : fonds très sombres, accent ambre parcimonieux,
typo monospace pour tout ce qui joue le rôle de repère technique (titres,
eyebrows, labels). L'ambre est un accent, pas une couleur de fond : il sert
les CTA, les liens actifs, les soulignements — rarement plus d'un par écran.

## Motif récurrent : les crochets

Les labels et eyebrows s'écrivent entre crochets, façon flag de ligne de
commande, en `--font-display` et souvent en `--cta-yellow` :

```
[ MA DÉMARCHE ]   [ PROJETS ]   [ CONTACT ]
```

C'est la signature visuelle du site. Un écran conçu avec cette charte devrait
en porter au moins un.

## Hors charte, volontairement

Les couleurs de marque tierces (YouTube, X, LinkedIn, WhatsApp) et les
couleurs distinctives de catégorie d'article ou de projet sont délibérément
en dehors de la charte : ce sont des identités externes ou des repères de
différenciation, pas la palette du site. Ne pas les uniformiser sur l'accent
principal.
