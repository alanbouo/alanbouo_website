# Docker contourne ufw : pourquoi votre port reste ouvert malgré le pare-feu

## X

ufw actif, règle « tout refuser sauf 22, 80 et 443 » : un port PostgreSQL publié par Docker reste joignable depuis Internet. ufw status ne le montre pas.

Docker écrit ses propres règles iptables, et le trafic vers le conteneur les traverse avant celles d'ufw. Sur mon serveur, quatre bases PostgreSQL étaient publiées sur Internet de cette façon.

Le mécanisme, le piège du 0.0.0.0 et la vérification en dix minutes : https://alanbouo.com/blog/docker-contourne-ufw

## LinkedIn

C'est probablement l'erreur la plus répandue de l'auto-hébergement, parce qu'elle donne une impression de sécurité que la machine ne fournit pas.

Sous Linux, ufw écrit ses règles dans iptables. Quand Docker publie un port, il ne passe pas par ufw : il écrit ses propres règles, que le trafic destiné au conteneur traverse avant celles d'ufw. Vous pouvez avoir un pare-feu actif qui refuse tout sauf 22, 80 et 443, et une base PostgreSQL publiée par Docker reste joignable depuis n'importe où. Rien ne vous prévient.

Je l'ai constaté pendant l'investigation sur la compromission de mon instance Metabase : quatre bases étaient publiées sur Internet, et leurs identifiants étaient lisibles par l'attaquant.

J'ai décidé de placer le filtrage là où Docker ne peut pas écrire : un pare-feu chez l'hébergeur, devant la machine. Une fois les ports fermés, le 13 septembre, le trafic d'attaque externe sur ces bases est passé d'environ 200 tentatives par jour à zéro.

ufw n'est pas inutile. Il ne protège simplement pas ce que Docker publie. Et le test se fait depuis l'extérieur : un test local ne vaut pas mesure externe.

Où se trouve le filtrage de vos serveurs : sur la machine, ou devant ?

https://alanbouo.com/blog/docker-contourne-ufw
