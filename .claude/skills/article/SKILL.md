---
name: article
description: Rédiger un article du blog alanbouo.com et ses posts X et LinkedIn, prêts à relire, puis ouvrir la pull request dont la fusion publie l'article. Déclencher quand Alan demande un article de blog, à partir d'un sujet, d'un brouillon, d'une source ou d'une conversation.
---

# /article : un article et ses posts, livrés en pull request

Entrée : `$ARGUMENTS` = un sujet, un brouillon existant, un lien ou une matière factuelle.

Le résultat est **une pull request** sur ce dépôt. Alan relit la PR (le texte, la
prévisualisation Vercel, les posts), puis la fusionne : **fusionner, c'est publier**.
Il ne doit rester que la relecture. Rien à qualifier, rien à recopier.

## 1. Lire avant d'écrire (sources uniques)

1. `../alanbouo-pilotage/voice.md` : la voix.
2. `../newsroom/prompts/alanbouo/blog.md` : le gabarit de l'article.
3. `../newsroom/prompts/alanbouo/x.md` et `linkedin.md` : les gabarits des posts.
4. `content/blog/` : les articles publiés, pour les liens internes et pour ne pas se répéter.
5. Pour un sujet d'incident ou de produit, les fichiers du dépôt de pilotage (rapport
   d'incident, `backlog-sujets.md`, `journal-publications.md`) font foi sur les faits.

Si un de ces fichiers est introuvable, arrête-toi et dis-le.

## 2. Écrire

- `content/blog/<slug>.mdoc` : frontmatter complet (`title`, `description`, `category`,
  `tags`, `featured: false`) avec **`date:` vide**. La prévisualisation affiche la date du
  build ; à la fusion, l'action « Date de publication » écrit la date du jour.
- `content/social/<slug>.md` : les posts, au format décrit dans `content/social/README.md`.
  Chaque post se termine par le lien `https://alanbouo.com/blog/<slug>`. LinkedIn suit
  son gabarit : le sujet IA/cyber, le produit seulement en passant. Pour une sortie de
  produit ou un sujet hors IA/cyber, pas de post LinkedIn.
- Aucun chiffre, date ou fait absent des sources. Une information qui manque s'écrit
  `[À COMPLÉTER : …]` et se signale dans la PR.

## 3. Vérifier

- `npm run build` passe.
- Les liens internes (`/blog/<slug>`) pointent vers des articles publiés, ou vers un
  article d'une autre PR : dans ce cas, le dire dans la PR (ordre de fusion).
- Aucune adresse IP réelle non masquée, aucun secret, aucune mention de l'activité
  confidentielle (voir `voice.md`).

## 4. Livrer

```bash
git switch -c article/<slug> main
git add content/blog/<slug>.mdoc content/social/<slug>.md
git commit -m "Article : <titre court>"
git push -u origin article/<slug>
gh pr create --base main --title "Article : <titre court>" --body-file <notes>
```

Le corps de la PR contient, dans cet ordre :
1. une phrase sur le sujet et l'angle ;
2. **À regarder** : les `[À COMPLÉTER]` restants, les faits à confirmer, l'ordre de
   fusion si un lien interne en dépend, l'absence d'image de couverture (le skill
   `illustration-article` la produit) ;
3. **Après la fusion** : publier les posts de `content/social/<slug>.md`.

Puis revenir sur `main`. Ne jamais fusionner soi-même : c'est la décision d'Alan.
