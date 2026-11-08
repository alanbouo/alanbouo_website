# Exposer son serveur IA local sur Internet : ce que révèle un simple sous-domaine

## X

Un sous-domaine qui pointe vers une machine chez soi publie plus qu'une adresse. La résolution inverse dit : connexion résidentielle, opérateur, pays, zone. Le domaine dit à qui elle appartient.

Et l'adresse est dynamique. Au prochain changement, le nom désignera la connexion d'un inconnu, toujours sous votre domaine. Ce qu'il vaut mieux faire à la place, avec les contreparties : https://alanbouo.com/blog/exposer-serveur-ia-local-sous-domaine

## LinkedIn

Faire tourner des modèles chez soi et les joindre depuis l'extérieur est un besoin légitime : de l'inférence sans louer de GPU. Le réflexe qui marche en cinq minutes, un enregistrement DNS vers sa connexion, publie pourtant beaucoup.

Je l'ai vu sur un de mes sous-domaines. La résolution inverse de l'adresse se lit sans outil : une connexion résidentielle, l'opérateur, le pays, un bloc d'adresses donc une zone. Le nom de domaine dit à qui tout cela appartient, et le sous-domaine ce que fait la machine. Ce nom figurait dans les registres de transparence des certificats depuis cinq mois.

Le second risque est plus discret. L'adresse est dynamique, l'enregistrement ne l'est pas. Au prochain changement, ce nom désignera la connexion d'un inconnu. Tout ce qui lui fait encore confiance, une liste CORS, un webhook, une variable oubliée, enverra ses requêtes chez ce tiers. C'est la forme domestique du dangling DNS.

Par ordre de préférence : un réseau privé (Tailscale, WireGuard), puis un tunnel sortant, et seulement en dernier recours un enregistrement public, via un relais. Chaque option a sa contrepartie, détaillée dans l'article.

Et un geste que presque personne ne fait : lister ce que les registres de transparence connaissent de son domaine.

https://alanbouo.com/blog/exposer-serveur-ia-local-sous-domaine
