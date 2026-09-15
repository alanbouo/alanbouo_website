## Ce que contient ce design system

La charte du site alanbouo.com, **sans composants**. Le site est une app
Next.js : ses composants (nav, footer, cartes) sont couplés au routeur et ne
sont pas publiables en librairie. Ce qui est publié ici, et qui suffit à
produire des écrans à la bonne identité : les **tokens CSS**, la **feuille de
style globale** et les **guidelines** de direction artistique.

Il n'y a donc **aucun composant à importer**, aucun provider à monter,
`window.AlanbouoDS` est vide. Tu construis tes propres éléments, en HTML/CSS,
avec le vocabulaire ci-dessous.

## Idiome de style : CSS classique + variables

Pas de Tailwind, pas de CSS-in-JS, pas de props de thème. On écrit du CSS et
on lit les couleurs et polices dans les variables de `:root` :

| Rôle | Variable |
|---|---|
| Fond sombre (hero, nav, footer) | `--primary-blue` |
| Surface sombre alternative | `--surface-dark-alt` |
| Accent principal (CTA, liens) | `--cta-yellow` |
| Accent secondaire | `--tech-green` |
| Texte sur fond clair | `--text-color` |
| Fonds clairs | `--white`, `--light-gray` |
| Police titres / repères | `--font-display` (JetBrains Mono) |
| Police texte courant | `--font-body` (Libre Franklin) |
| Interligne de base | `--line-height` |

**Aucun hex en dur pour ces rôles.** Les deux familles sont chargées par un
`@import` Google Fonts en tête de la feuille de style — rien à installer.

## Classes déjà définies

La feuille globale définit un petit jeu de classes, réutilisables telles
quelles : `.hero-section`, `.hero-content`, `.hero-title`, `.hero-subtitle`,
`.hero-cta`, `.hero-meta`, `.cta`, `.nav-link`, `.footer-link`,
`.social-link`, `.social-icon`, `.article-card`, `.teaser-card`,
`.stat-card`, `.testimonial-card`, `.category-link`, `.article-body`,
`.grid`, `.profile-image`, `.hover-glow`, `.fade-glow`, `.visually-hidden`.

Tout le reste est à écrire — invente des noms explicites, mais style-les
toujours avec les variables ci-dessus plutôt qu'avec des valeurs littérales.

## Signature : les crochets

Les eyebrows et labels de section s'écrivent entre crochets, façon flag CLI,
en `--font-display` : `[ MA DÉMARCHE ]`, `[ PROJETS ]`. C'est le motif le plus
reconnaissable de l'identité — utilise-le.

## Où lire la vérité

`_ds/<dossier>/styles.css` et son import `_ds_bundle.css` : c'est la feuille
réelle du site, y compris le reset et les règles de `body`. `guidelines/`
contient la note de direction artistique (registre, usages, ce qui est
volontairement hors charte).

## Exemple idiomatique

```html
<section class="hero-section">
  <div class="hero-content">
    <p style="font-family: var(--font-display); color: var(--cta-yellow)">[ MA DÉMARCHE ]</p>
    <h1 class="hero-title">Construire, puis montrer</h1>
    <p class="hero-subtitle">Des outils qui marchent avant d'être racontés.</p>
    <a class="cta" href="#contact">Prendre contact</a>
  </div>
</section>
```
