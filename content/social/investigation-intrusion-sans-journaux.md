# Investigation après une intrusion sans journaux : distinguer « non observé » et « prouvé absent »

## X

Après une intrusion, « on n'a rien vu » et « il ne s'est rien passé » ne sont pas la même phrase.

Sur mon instance Metabase, aucune des 2 875 requêtes de l'outil n'a été exécutée par un compte malveillant. Mais l'injection qui a servi à entrer ne passe pas par ces requêtes. Ce chiffre ne dit rien de ce qu'elle a lu.

Comment écrire une conclusion honnête quand les journaux manquent : https://alanbouo.com/blog/investigation-intrusion-sans-journaux

## LinkedIn

Image : `investigation-intrusion-sans-journaux.png` (dans ce dossier)
Lien de l'article en premier commentaire : https://alanbouo.com/blog/investigation-intrusion-sans-journaux

J'ai mené une investigation après intrusion avec une IA, du 13 au 15 septembre. Elle a accéléré des choses réelles, et elle a affirmé une chose qu'elle n'avait pas vérifiée.

Ce qui a bien marché : identifier la CVE à partir de la version et d'un symptôme banal, extraire et lire un dump de 149 Mo (53 tables non vides), reconstituer la chronologie, cartographier ce qui était exposé, rédiger le rapport d'incident.

Ce qui a raté, tel quel : un utilisateur PostgreSQL `postgres` supposé, alors que Coolify crée un rôle par ressource. Un `grep` sur des noms de conteneurs qui sont des identifiants opaques et ne pouvaient rien donner. Une chaîne prise pour un mot de passe, alors que c'était un nom d'utilisateur.

Et surtout : l'affirmation que la surface exposée se limitait à SSH et HTTP/HTTPS, sans avoir scanné les autres ports. Un balayage élargi a ensuite montré l'interface d'administration de Coolify joignable depuis Internet sur le port 8000, en HTTP non chiffré, ainsi que les ports 6001 et 6002. Elle est restée ouverte pendant qu'on refermait Metabase.

Ce qui pose problème n'est pas l'erreur en soi, c'est la forme de la phrase : « la surface se limite à… » se lit comme un constat, alors que c'était une absence de mesure.

C'est la distinction qui fait la valeur d'un rapport d'incident : « non observé » n'est pas « prouvé absent ».

Quand un outil vous rend un constat d'absence, savez-vous ce qu'il a réellement mesuré ?

Texte alternatif : trois ports (22, 80, 443) présentés comme affirmés, puis trois ports (8000, 6001, 6002) constatés ensuite en scannant, dont l'interface d'administration Coolify en HTTP non chiffré.
