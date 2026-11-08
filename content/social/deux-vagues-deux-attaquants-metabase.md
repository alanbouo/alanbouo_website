# Compromission de masse : deux vagues, deux attaquants, lisibles dans les données

## X

Dix comptes administrateurs créés par des tiers sur mon instance Metabase. Relus dans la base, ils se rangent en deux groupes qui n'ont presque rien en commun.

D'abord six comptes admin-*@poc.local, connectés une fois, dans les secondes : on vérifie que la porte est ouverte. Puis quatre svc-backup-*, prénom « System », connectés des heures après : on cherche à rester.

Ce que les noms, les horaires et les adresses révèlent : https://alanbouo.com/blog/deux-vagues-deux-attaquants-metabase

## LinkedIn

Quand on pense « piratage », on imagine quelqu'un qui a choisi sa cible. Une compromission de masse ne ressemble pas à ça.

Sur mon instance Metabase, compromise par une faille notée 10.0, au moins dix comptes administrateurs ont été créés par des tiers. Relus dans la base, ils forment deux vagues.

La première : six comptes nommés sur le même modèle, connectés une seule fois dans les secondes qui suivent leur création, depuis un hébergeur cloud, dont un avec la signature d'un script Python. La preuve que la faille marche, puis l'instance suivante.

La seconde : quatre comptes « service de sauvegarde », prénom « System », un nommage qui passe pour technique et légitime. Des connexions plusieurs heures après la création, à intervalle régulier. Cette régularité évoque un pipeline automatisé, mais c'est une hypothèse, pas une preuve.

Pour celui qui défend, ce ne sont pas les mêmes questions. La première vague dit « vous étiez vulnérable ». La seconde demande « qu'a-t-on fait chez vous ? ».

Une faille publique avec des milliers d'instances exposées n'attire pas un attaquant, elle en attire plusieurs. Je n'ai pas été choisi : mon instance était dans la liste.

Le contrôle le plus simple : la liste des utilisateurs, triée par date de création. Un compte que vous n'avez pas créé, même nommé « System », est un signal.

https://alanbouo.com/blog/deux-vagues-deux-attaquants-metabase
