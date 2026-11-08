# Posts des réseaux sociaux

Un fichier par article, au même nom que lui : `content/social/<slug>.md` accompagne
`content/blog/<slug>.mdoc`, dans la même pull request. On relit l'article et ses posts au
même endroit ; après la fusion, on publie les posts. Le site n'affiche pas ce dossier.

Format :

```markdown
# <titre de l'article>

## X

<premier tweet>

<deuxième tweet, s'il y en a un>

## LinkedIn

<le post>
```

- **X** : 1 à 3 tweets, un par paragraphe, 280 caractères au plus chacun, lien de
  l'article dans le dernier. Un fil de plusieurs tweets se publie en réponses successives.
- **LinkedIn** : un post, lien de l'article à la fin. Absent quand le sujet n'est pas
  l'IA ou la cybersécurité (sortie de produit, référencement).

Les gabarits font foi : `../newsroom/prompts/alanbouo/x.md` et `linkedin.md`, avec la voix
de `../alanbouo-pilotage/voice.md`.
