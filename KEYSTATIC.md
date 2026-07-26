# Éditeur de blog (Keystatic)

Le site intègre **Keystatic**, un éditeur web pour rédiger et publier des articles
(avec upload d'images) sans toucher au code. Deux modes :

- **En local** (sur ta machine) : fonctionne tout de suite, sans configuration.
- **En ligne** (publier depuis n'importe où) : nécessite une petite mise en route une fois.

---

## Utiliser l'éditeur en local (immédiat)

```bash
npm run dev
```

Puis ouvre <http://localhost:3000/keystatic>. Tu crées/édites les articles, tu déposes
les images : les fichiers sont écrits directement sur le disque (dans `content/blog/`
et `public/img/blog/`). Ensuite tu commits + push comme d'habitude.

---

## Activer la publication en ligne (Keystatic Cloud)

Objectif : pouvoir publier depuis le navigateur, y compris le téléphone. Keystatic Cloud
gère la connexion GitHub à ta place. **Mise en route unique (~5 min) :**

### 1. Créer le projet Keystatic Cloud
- Va sur <https://keystatic.cloud> et connecte-toi avec GitHub.
- Crée une **Team**, puis un **Project** relié au dépôt `alanbouo/alanbouo_website`.
- Note l'identifiant du projet, au format **`ta-team/ton-projet`**.

### 2. Renseigner la variable d'environnement sur l'hébergeur (Vercel)
- Projet → **Settings → Environment Variables**.
- Ajoute :
  - **Nom** : `NEXT_PUBLIC_KEYSTATIC_PROJECT`
  - **Valeur** : `ta-team/ton-projet` (celui de l'étape 1)
- Redéploie (un simple push, ou « Redeploy » depuis le dashboard).

### 3. Publier
- Ouvre <https://alanbouo.com/keystatic>.
- **Sign in with GitHub** → autorise.
- Rédige un article, dépose une image de couverture, clique sur **Create / Save**.
  Keystatic **commit** dans le dépôt → l'hébergeur **redéploie** → c'est en ligne.

---

## Sécurité

L'authentification est déléguée à **GitHub** : seuls les comptes ayant un accès en écriture
au dépôt `alanbouo/alanbouo_website` peuvent publier. Rien à gérer de plus (pas de mot de
passe maison, pas de base de données).

## Notes techniques

- Les articles sont des fichiers `content/blog/<slug>.mdoc` (Markdown/Markdoc + en-tête).
  Le champ image range automatiquement les fichiers dans `public/img/blog/` et écrit le bon
  chemin — les erreurs de dossier/nom d'hier ne sont plus possibles.
- Le site sait lire les deux formats `.mdoc` (éditeur) et `.md` (écrit à la main).
- L'éditeur `/keystatic` s'affiche sans la barre de navigation ni le pied de page du site.
