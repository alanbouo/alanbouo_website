# Comment publier un article de blog

Chaque article est un simple fichier Markdown dans ce dossier (`content/blog/`).
Pour publier : ajoute un fichier `.md`, commit, push. Il apparaît automatiquement
sur `/blog` et à l'adresse `/blog/<nom-du-fichier>` (sans le `.md`).

## 1. Le nom du fichier = l'URL (le « slug »)

`content/blog/mon-nouvel-article.md` → `https://alanbouo.com/blog/mon-nouvel-article`

Utilise des minuscules, des tirets, pas d'accents ni d'espaces.

## 2. L'en-tête (frontmatter)

Le fichier commence par un bloc entre `---`, avec les infos de l'article :

```markdown
---
title: "Le titre de mon article"
description: "Une phrase de résumé (s'affiche dans les listes et le partage)."
date: "2026-08-01"
category: "IA"
tags: ["IA", "Vulgarisation"]
featured: false
image: "/img/blog/mon-image.jpg"
---
```

- **title** / **description** : obligatoires.
- **date** : format `"AAAA-MM-JJ"`, entre guillemets. Les articles sont triés du plus récent au plus ancien.
- **category** : `Build in public`, `IA`, `Cybersécurité` ou `Coulisses` (une autre catégorie fonctionne aussi, elle prendra une couleur par défaut).
- **tags** : liste entre crochets.
- **featured** : mets `true` pour que l'article soit « à la une » sur `/blog`. Un seul à la fois.
- **image** : *facultatif*. Chemin de l'illustration (voir plus bas). Enlève la ligne si tu n'en as pas.
- **readingTime** : *facultatif*. Calculé automatiquement ; ajoute `readingTime: 6` pour forcer une valeur.

## 3. Le contenu

Sous l'en-tête, écris normalement en Markdown :

```markdown
Un paragraphe d'introduction.

## Un sous-titre

- un élément de liste
- un autre

> Une citation mise en avant.

Un [lien](https://exemple.com) et du **gras** au besoin.
```

## 4. L'image d'illustration

1. Dépose ton image dans `public/img/blog/` (ex. `public/img/blog/mon-image.jpg`).
2. Référence-la dans l'en-tête : `image: "/img/blog/mon-image.jpg"` (le chemin commence toujours par `/img/blog/`).

L'image s'affiche en haut de l'article, sur la carte de la liste, et sert d'aperçu au partage (réseaux sociaux).
Formats conseillés : `.jpg` ou `.webp`, largeur ~1200 px.

## 5. Publier

Commit + push sur `main` : le site se reconstruit et l'article est en ligne.
