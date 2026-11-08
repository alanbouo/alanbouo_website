# Fausse vérification Mac : ce que contient vraiment la commande collée dans le Terminal

## X

Je cherchais à installer la CLI de Grok. Premier résultat, pas une annonce : grokcli.io. Quelques secondes plus tard, une page me demandait de coller une commande dans le Terminal. J'ai collé. Je n'ai pas appuyé sur Entrée.

Validée, la commande installe un agent au démarrage, lit l'adresse de son serveur dans un contrat public sur la blockchain Polygon, puis affiche une fausse fenêtre des Réglages Système pour obtenir le mot de passe de session.

Ce que la page affichait, ce que contenait le presse-papiers, et quoi vérifier sur son Mac : https://alanbouo.com/blog/fausse-verification-mac-commande-terminal

## LinkedIn

Une page web qui vous demande de coller une commande dans le Terminal n'a besoin d'aucune faille. Elle compte sur un geste.

Je suis tombé sur l'une d'elles en cherchant la CLI de Grok : premier résultat, pas une annonce. Une carte « Secure access check », une coche verte « Verified », quatre étapes pour ouvrir le Terminal et coller. La coche ne prouvait rien : un paramètre dans l'adresse suffisait à l'afficher. La page ne faisait qu'une chose, remplir le presse-papiers.

Ce qu'elle y mettait : une ligne qui télécharge un script. Ce script s'installe au démarrage sous un nom qui imite Apple, va chercher l'adresse de son serveur dans un contrat public sur la blockchain Polygon, puis affiche une fausse fenêtre des Réglages Système pour obtenir le mot de passe de session. Bloquer un nom de domaine protège la visite d'hier : l'adresse peut changer sans qu'on retouche ni la page ni l'agent déjà installé.

Le piège est crédible parce que, pour beaucoup d'outils en ligne de commande, coller une commande est le geste normal d'installation. C'est vrai de la CLI officielle elle-même.

Dans l'article : la page, la commande décodée sans être exécutée, ce qui n'est pas établi, et les deux cas à distinguer si vous avez vu cette page.

Dans vos équipes, qui installe des outils en collant une commande trouvée en ligne ?

https://alanbouo.com/blog/fausse-verification-mac-commande-terminal
