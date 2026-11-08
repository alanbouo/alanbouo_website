# Docker contourne ufw : pourquoi votre port reste ouvert malgré le pare-feu

## X

ufw actif, règle « tout refuser sauf 22, 80 et 443 » : un port PostgreSQL publié par Docker reste joignable depuis Internet. ufw status ne le montre pas.

Docker écrit ses propres règles iptables, et le trafic vers le conteneur les traverse avant celles d'ufw. Sur mon serveur, quatre bases PostgreSQL étaient publiées sur Internet de cette façon.

Le mécanisme, le piège du 0.0.0.0 et la vérification en dix minutes : https://alanbouo.com/blog/docker-contourne-ufw

## LinkedIn

Image : `docker-contourne-ufw.png` (dans ce dossier)
Lien de l'article en premier commentaire : https://alanbouo.com/blog/docker-contourne-ufw

Vous avez un pare-feu actif, une règle « tout refuser sauf 22, 80 et 443 », et un port PostgreSQL publié par Docker reste joignable depuis Internet.

Docker ne passe pas par ufw. Pour publier un port, il écrit ses propres règles dans la chaîne DOCKER d'iptables, que le trafic traverse avant les règles de ufw. Rien ne vous prévient, et `ufw status` ne le montre pas.

Chez moi, `ufw status` affichait `inactive`. Quatre bases PostgreSQL de mon serveur étaient publiées sur Internet, et ce qui les séparait de l'extérieur n'était pas un pare-feu mais une case dans une interface. Même actif, ufw n'y aurait rien changé.

J'ai décidé de placer le filtrage là où Docker ne peut pas écrire : un pare-feu chez l'hébergeur, devant la machine. Il survit à Docker, aux redémarrages et aux erreurs de configuration d'un service.

Dix minutes pour vérifier le vôtre :
1. `docker ps --format '{{.Names}}\t{{.Ports}}'` : tout `0.0.0.0:` ou `:::` est joignable de partout si rien ne filtre en amont.
2. Un scan depuis une autre connexion (`nmap -Pn votre-ip`). Le test fait depuis la machine ne mesure pas ce que voit Internet.
3. Retirer les `ports:` d'une base qui n'est utilisée que par une application voisine : un réseau Docker interne suffit.

La dernière fois que vous avez regardé votre serveur depuis l'extérieur, c'était quand ?

Texte alternatif : schéma Internet vers chaîne DOCKER vers conteneur sur le port 5433, avec les règles ufw en dessous, contournées et jamais atteintes.
