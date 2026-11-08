# MB_ENCRYPTION_SECRET_KEY : la variable qui protège les mots de passe de vos bases dans Metabase

## X

« Saved credentials encryption is DISABLED for this Metabase instance. » Le message était dans mes journaux depuis l'installation. Je ne l'avais jamais lu.

Sans MB_ENCRYPTION_SECRET_KEY, Metabase stocke en clair les identifiants des bases qu'il interroge. Quand sa base interne a été lue par une injection SQL, la table contenait les identifiants de six bases, en clair.

Pourquoi la clé se pose à l'installation, et comment ne pas la perdre : https://alanbouo.com/blog/metabase-mb-encryption-secret-key

## LinkedIn

Image : `metabase-mb-encryption-secret-key.png` (dans ce dossier)
Lien de l'article en premier commentaire : https://alanbouo.com/blog/metabase-mb-encryption-secret-key

Entre « on a piraté mon outil de tableaux de bord » et « on a lu les mots de passe de toutes mes bases de production », il y a une variable d'environnement. Sur mon instance Metabase, elle n'était pas définie.

Metabase garde les identifiants des bases qu'il interroge (hôte, port, utilisateur, mot de passe) dans sa propre base interne. Avec `MB_ENCRYPTION_SECRET_KEY`, ils sont chiffrés. Sans elle, ils sont stockés en clair. Tant que personne ne lit cette base, la différence est invisible.

Mon instance a été compromise en août et septembre par CVE-2026-72898, une injection SQL non authentifiée notée CVSS 10.0, qui permet de lire cette base interne. Elle contenait les identifiants de six bases, en clair. Quatre étaient en même temps publiées sur Internet. Avec la clé, l'attaquant aurait obtenu ces identifiants chiffrés : la faille aurait été la même, ce qu'elle donnait, non.

Je ne peux pas affirmer que ces bases ont été consultées, leurs journaux de connexion étant désactivés. Je peux affirmer qu'elles étaient joignables et que leurs identifiants étaient lisibles. Il a fallu faire tourner quatre mots de passe et reconfigurer trois applications.

Le message était dans les journaux de démarrage depuis l'installation : « Saved credentials encryption is DISABLED ». Je ne l'avais jamais lu.

Le piège : la clé se pose avant, pas après. Au premier démarrage avec la clé, les secrets existants sont chiffrés. Si la clé est perdue, ils deviennent illisibles. Elle se génère, se range dans un gestionnaire de secrets, et se sauvegarde comme la base elle-même.

Le cas dépasse Metabase : outils d'automatisation, tableaux de bord, ETL stockent tous des identifiants vers d'autres systèmes. Dans les vôtres, qu'obtiendrait quelqu'un qui en lirait la base ?

Texte alternatif : extrait de journal de démarrage de Metabase indiquant que le chiffrement des identifiants enregistrés est désactivé, avec le nom de la variable MB_ENCRYPTION_SECRET_KEY.
