# Notes de sync (design-sync)

- **Ce dépôt n'est pas un design system.** C'est l'app Next.js du site. La sync
  est volontairement en mode **tokens-only** (choix utilisateur, 2026-09-15) :
  charte CSS + guidelines, zéro composant.
- Les 6 composants de `components/` sont couplés à Next (`'use client'`,
  `next/link`, `next/navigation`) et ne sont pas bundlables hors de Next. Les
  publier supposerait de stubber ces imports — écarté.
- Le convertisseur attend `node_modules/<pkg>`, qui n'existe pas ici (npm ne
  s'auto-installe pas). D'où `cfg.entry = ./.design-sync/ds-entry.mjs`, un
  module vide dont le parent porte le `package.json` du dépôt : il fixe
  `PKG_DIR` sur la racine et déclenche le chemin tokens-only
  (`[ZERO_MATCH]` + `cfg.cssEntry` renseigné). **Ne pas supprimer ce fichier.**
- `cfg.srcDir = lib` est choisi parce que `lib/` ne contient aucun `.tsx` :
  ça garantit qu'aucun composant n'est découvert. Pointer `srcDir` sur
  `components/` ré-embarquerait les composants Next.
- Les polices (JetBrains Mono, Libre Franklin) viennent d'un `@import` Google
  Fonts en tête de `app/globals.css` → `[FONT_REMOTE]` attendu, non bloquant.
  Aucun woff2 n'est embarqué, c'est voulu.
- `[RENDER_SKIPPED]` : playwright est installé dans `.ds-sync/` uniquement pour
  satisfaire la validation. Avec 0 preview, le render check ne vérifie rien.

## Warns attendus (non bloquants)

- `[FONT_REMOTE] "Libre Franklin", "JetBrains Mono"`

## Risques de re-sync

- La DA évolue **d'abord** dans `alanbouo-pilotage/chaine.md`, puis dans
  `app/globals.css`. Une sync qui part de `globals.css` peut donc publier une
  charte en retard sur `chaine.md` — vérifier la cohérence avant de rebuild.
- `app/globals.css` contient aussi des règles très spécifiques aux pages du
  site (cartes de blog, timeline, `!important`). Elles partent dans le bundle.
  Si elles gênent les designs générés, il faudra extraire une feuille
  "charte seule" et pointer `cfg.cssEntry` dessus.
- `.design-sync/conventions.md` énumère des classes réelles de `globals.css`.
  Si des classes sont renommées ou supprimées, re-valider ces noms contre
  `ds-bundle/_ds_bundle.css` avant d'uploader.
