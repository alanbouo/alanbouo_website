# MB_ENCRYPTION_SECRET_KEY : la variable qui protège les mots de passe de vos bases dans Metabase

## X

« Saved credentials encryption is DISABLED for this Metabase instance. » Le message était dans mes journaux depuis l'installation. Je ne l'avais jamais lu.

Sans MB_ENCRYPTION_SECRET_KEY, Metabase stocke en clair les identifiants des bases qu'il interroge. Quand sa base interne a été lue par une injection SQL, la table contenait les identifiants de six bases, en clair.

Pourquoi la clé se pose à l'installation, et comment ne pas la perdre : https://alanbouo.com/blog/metabase-mb-encryption-secret-key

## LinkedIn

Il y a une différence énorme entre « on a piraté mon outil de tableaux de bord » et « on a lu les mots de passe de mes bases de production ». Sur mon instance Metabase, cette différence tenait à une variable d'environnement qui n'était pas définie.

Metabase garde les identifiants des bases qu'il interroge dans sa propre base interne. Avec MB_ENCRYPTION_SECRET_KEY, ils sont chiffrés. Sans elle, ils sont en clair. Tant que personne ne lit la base interne, la différence est invisible.

Le jour où une injection SQL l'a lue, la table contenait les identifiants de six bases connectées, en clair. Il a fallu faire tourner quatre mots de passe et reconfigurer trois applications. Avec la clé, la faille aurait été la même ; ce qu'elle donnait, non.

Le piège : la clé se pose avant. Au premier démarrage, Metabase chiffre les secrets existants ; si la clé est perdue, ils deviennent illisibles. Elle se stocke dans un gestionnaire de secrets et se sauvegarde comme la base elle-même.

Le cas dépasse Metabase : outils d'automatisation, tableaux de bord, ETL stockent tous des identifiants vers d'autres systèmes. Pour chacun, une question : si quelqu'un lit sa base, qu'obtient-il en clair ?

https://alanbouo.com/blog/metabase-mb-encryption-secret-key
