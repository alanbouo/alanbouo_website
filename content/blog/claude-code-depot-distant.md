---
title: "Comment faire tourner Claude Code sur un dépôt distant ?"
description: "J'ai testé 4 façons de faire tourner Claude Code sur un dépôt distant — voici ce qui compte vraiment"
date: "2026-07-26"
category: "IA"
tags: ["IA", "Vulgarisation", "Claude"]
featured: false
image: "/img/blog/claude-code-depot-distant.png"
---

Je voulais mieux comprendre les différentes façons de travailler avec Claude Code sans tout avoir à cloner en local. J'avais un découpage bien rangé en tête : trois options, trois cas d'usage, un tableau pour choisir. Je les ai testées avant de trancher. En cours de route, ce découpage a évolué en fonction de ce que les tests montraient — et le résultat est plus intéressant que celui que j'avais en tête au départ.

## Le protocole

Rien de sophistiqué : un dépôt jetable avec une petite API à deux bugs (une pagination cassée, une validation manquante), et le même prompt collé tel quel dans chaque option. L'idée de départ était de comparer trois façons d'exécuter Claude Code à distance : l'interface web (claude.ai/code), la mention `@claude` sur GitHub, et un environnement cloud type Codespaces. Un blocage de configuration sur l'option GitHub m'a fait tester en complément la CLI Claude Code en local sur mon Mac.

Ce que je cherchais à comparer, c'était la praticité de chaque méthode au quotidien — pas la qualité du code produit, qui n'avait de toute façon aucune raison de varier : c'est le même modèle derrière les quatre.

## Le code produit était quasi identique partout

Sur les quatre variantes que j'ai finalement testées, le diagnostic et la correction ont été les mêmes : le même bug de calcul d'offset trouvé et corrigé de la même façon, la même validation ajoutée. Quatre sessions séparées, même diagnostic, même correction. 

Si tout produit la même chose, la comparaison ne se joue pas là. En creusant sur le *comment* plutôt que sur le *quoi*, deux axes sont ressortis.

## Premier axe : asynchrone ou pas

Sur l'interface web, j'ai lancé la tâche et fermé mon laptop. Le résultat m'attendait à mon retour : diff propre, tests passés, branche poussée, demande de créer une PR. Zéro présence requise entre le lancement et la relecture.

Sur la CLI Claude Code — que ce soit en local sur mon Mac ou dans un Codespace — c'est l'inverse. Claude redemande des confirmations régulièrement pendant qu'il travaille. Impossible de fermer l'ordinateur et de revenir plus tard : il faut rester sur la session, valider au fur et à mesure. Sur le Codespace, il faut même garder l'onglet VS Code ouvert en continu.

La mention `@claude` sur GitHub se range du côté asynchrone — une fois l'issue postée, pas besoin de rester devant l'écran — mais avec un revers : l'effet tunnel est total. Aucune intervention possible pendant l'exécution, contrairement à l'interface web où au moins on peut suivre si on veut. On poste, on attend, on découvre le résultat fini, sans marge de manœuvre entre les deux.

## Deuxième axe : la preuve d'exécution

C'est celui que je n'avais pas du tout anticipé, et c'est le plus révélateur.

Sur l'interface web, la CLI locale, et le Codespace, Claude a réellement lancé les tests qu'il venait d'écrire et m'a donné la preuve que ça tournait — un compte-rendu clair du type "5 tests, 5 passés" à chaque fois.

Sur la mention `@claude` via GitHub Actions, non. Claude a écrit le code, écrit les tests, et me l'a dit lui-même noir sur blanc dans son résumé : il n'avait pas pu exécuter `npm install` ni les tests, parce que l'exécution de commandes Bash est désactivée par défaut dans cette configuration. Il m'a même indiqué précisément quoi étendre dans la config pour changer ça la prochaine fois.

Ce n'est pas un manque de compétence du modèle — c'est une restriction de permissions posée par défaut sur ce mode d'exécution spécifique, probablement pour de bonnes raisons de sécurité vu qu'un dépôt peut être connecté à des dizaines de contributeurs. Mais concrètement, ça change le niveau de confiance qu'on peut accorder au résultat sans tout relire ligne à ligne : dans un cas j'ai une preuve, dans l'autre j'ai une promesse.

## Ce que je retiens pour mon usage

Sur ce test précis, l'interface web est la seule option qui combine les deux propriétés que je recherche : asynchrone (je lance et je reviens plus tard) et vérifiée (je sais que ça tourne avant même de relire le diff). L'app desktop de Claude Code fonctionne sur le même principe — même moteur cloud derrière, donc mêmes propriétés. C'est ce que je vais utiliser par défaut pour des tâches ciblées de ce genre.

La mention `@claude` reste intéressante pour un usage en équipe, dans un workflow déjà centré sur les issues GitHub — mais pas telle quelle par défaut : je testerai avec les permissions Bash étendues avant de m'y fier pour autre chose que des changements triviaux.

La CLI, en local ou en Codespace, reste la plus adaptée quand je veux garder la main en continu — reformuler, corriger, orienter en cours de route. C'est moins pratique pour lancer une tâche en fond, mais c'est la seule à offrir un vrai contrôle pendant l'exécution plutôt qu'avant/après.

## Ce qu'il faut en retenir

Le même modèle produit un code comparable partout, donc ce qui doit trancher ton choix, c'est le mode de travail, pas une réputation d'option "meilleure" dans l'absolu. En pratique :

- Une tâche ciblée, que tu veux lancer puis oublier le temps qu'elle tourne : privilégie une option asynchrone avec exécution vérifiée (web ou desktop). C'est le combo le plus sûr par défaut.
- Un travail où tu veux garder la main en continu, reformuler ou corriger en cours de route : privilégie la CLI, en local ou dans un environnement cloud persistant — au prix de rester devant l'écran.
- Un flux déjà centré sur les issues et PR GitHub, notamment en équipe : la mention `@claude` reste pertinente, mais vérifie et étends les permissions Bash avant d'y accorder la même confiance qu'aux deux options précédentes — par défaut, elle ne prouve pas que son propre code tourne.

