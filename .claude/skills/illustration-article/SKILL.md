---
name: illustration-article
description: Produire la couverture (1280×720) et la carte OG (1200×630) d'un article de blog à partir de son contenu, à la charte du site, exportées en PNG dans ~/Downloads. Déclencher quand on demande une illustration, une image de couverture, un visuel ou une carte OG pour un article.
---

Produire les visuels de l'article suivant : $ARGUMENTS

L'argument est un slug, un chemin vers un `.mdoc`, ou le texte collé de
l'article. Slug ou chemin → lire le fichier dans `content/blog/`.

## 1. Lire avant de dessiner

1. **L'article en entier.** Le frontmatter donne `title`, `description`,
   `category` et le slug ; le corps donne le sujet réel.
2. **`app/globals.css`, bloc `:root`** — la charte. Lire les valeurs, ne
   jamais les recopier de mémoire : elles changent. Les variables utiles :
   `--primary-blue` (fond), `--surface-dark-alt` (panneau),
   `--cta-yellow` (accent), `--tech-green` (accent secondaire),
   `--font-display` (mono, titres et repères), `--font-body`.
   Les artboards ne peuvent pas lire les variables : y écrire les valeurs
   littérales **relevées dans le fichier au moment de la génération**.
3. `docs/design/illustrations/` — les visuels déjà produits. S'en inspirer
   pour la cohérence de série, pas pour se répéter.

## 2. Trouver l'idée, pas la décoration

L'illustration doit rendre visible **le mécanisme que l'article décrit** —
la cascade, la boucle, l'écart, le point unique de défaillance. Pas une
métaphore générique (cadenas, bouclier, cerveau, réseau de neurones).

Test avant de dessiner : *en une phrase, qu'est-ce que le lecteur comprend
de l'article rien qu'en regardant l'image ?* Si la réponse est « que ça
parle de sécurité », recommencer.

Le registre du site est opérationnel, pas illustratif : arbres de terminal,
schémas, diagrammes au trait, typographie. Jamais d'emoji, jamais de
dégradé décoratif, jamais de photo d'illustration.

Le motif des crochets `[ ]` façon flag CLI est la signature du site : au
moins une occurrence par visuel (eyebrow, étiquette, marqueur).

## 3. Les deux formats, et pourquoi ils diffèrent

| Planche | Taille | Destination | Porte le titre ? |
|---|---|---|---|
| Couverture | 1280×720 (16:9) | `image:` du frontmatter | **non** |
| Carte OG | 1200×630 | `/img/blog/<slug>-og.png` | **oui** |

- **La couverture ne porte jamais le titre de l'article.** Le gabarit le
  réaffiche immédiatement sous l'image (`app/blog/[slug]/page.tsx`) : un
  titre dans l'image fait doublon. Le schéma est le sujet.
- **Le ratio 16:9 est impératif.** Le slot est en `aspectRatio: '16 / 9'`
  avec `object-fit: cover` : toute autre proportion est rognée sans
  avertissement, et un visuel large perd la moitié de sa largeur.
- **La carte OG porte le titre**, elle : sur LinkedIn ou X, rien d'autre
  ne l'accompagne. L'eyebrow reprend la `category` du frontmatter,
  entre crochets et en capitales.

## 4. Produire

Écrire à la main un artboard `.dc.html` par planche, plus `canvas.json`,
dans `docs/design/illustrations/<slug>/` — ils sont la source de toute
retouche ultérieure, les garder. Partir d'une série existante (ex.
`docs/design/illustrations/coupure/`) pour la structure : un `<div>` racine
aux dimensions exactes, `overflow: hidden`, styles inline, polices chargées
depuis Google Fonts dans `<helmet>`.

Nommer les artboards `Couverture.dc.html` et `Main.dc.html` (la carte OG),
`launch` sur la couverture.

Budget de texte : en JetBrains Mono, un caractère fait ~0,6 × la taille
de police. Compter les caractères des lignes longues avant d'écrire, et
mettre `white-space: nowrap` sur les lignes de terminal.

## 5. Exporter en PNG

Rendre chaque planche avec le script du skill (Chrome headless, recadrage
aux dimensions exactes, polices chargées) :

```bash
R=.claude/skills/illustration-article/scripts/render.py
D=docs/design/illustrations/<slug>
python3 $R $D/Couverture.dc.html 1280 720 ~/Downloads/<slug>-couverture.png
python3 $R $D/Main.dc.html       1200 630 ~/Downloads/<slug>-og.png
```

**Puis ouvrir les deux PNG avec Read et les regarder** avant de livrer :
rien ne déborde ni n'est coupé, la police est bien JetBrains Mono (pas
une police système), les couleurs correspondent à `globals.css`. Corriger
l'artboard et relancer si besoin.

## 6. Poser l'image dans le site

Les PNG sont dans `~/Downloads`. Dire à l'utilisateur où les déposer :

- couverture → `public/img/blog/<slug>/image.png`, puis dans le
  frontmatter : `image: "/img/blog/<slug>/image.png"`
- carte OG → `public/img/blog/<slug>-og.png` (le gabarit la cherche là
  par défaut, sans frontmatter)

**Ne pas modifier le frontmatter soi-même sans le dire** : demander, ou
faire et l'annoncer.

## 7. Rendre compte

Une ou deux phrases : l'idée retenue et pourquoi elle dit l'article, puis
les chemins des deux PNG dans `~/Downloads`. Signaler ce qui mérite une
vérification — un slug ou un eyebrow déduit, une donnée reprise ou
inventée pour l'image (IP, ports…), un cadrage limite.
