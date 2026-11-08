# Base PostgreSQL exposée sur Internet : 2 h 35 avant la première attaque

## X

Une base PostgreSQL mise en ligne à 07:15. Première tentative d'authentification depuis Internet à 09:50. Deux heures trente-cinq.

Sur une seule de mes bases : 77 476 tentatives en six mois, 12 390 noms d'utilisateur essayés. Sur la même machine, une base sans port publié : zéro tentative sur toute la période.

Et le port « caché » qui a tenu 4 mois et 21 jours, avant 25 287 tentatives en 54 minutes : https://alanbouo.com/blog/base-postgresql-exposee-internet

## LinkedIn

Image : `base-postgresql-exposee-internet.png` (dans ce dossier)
Lien de l'article en premier commentaire : https://alanbouo.com/blog/base-postgresql-exposee-internet

Une base de données mise en ligne à 07:15. Première tentative d'authentification depuis Internet à 09:50. Deux heures trente-cinq.

Ce chiffre vient des journaux de mes propres bases PostgreSQL, que Docker publiait sans que je le sache. Je les ai relus en septembre, sur six mois.

Sur une seule base : 77 476 tentatives, soit 406 par jour en moyenne et 843 par jour en août. 12 390 noms d'utilisateur différents. La répartition horaire est plate, 32 % d'écart entre l'heure la plus calme et la plus active : personne ne dort derrière ça, ce sont des programmes.

Leur dictionnaire n'est pas aléatoire. On y trouve `keycloak`, `strapi`, `airflow`, `kong`, `odoo`, `superset`, `n8n` : les rôles que ces logiciels créent par défaut. Les robots connaissent la pile de ceux qui hébergent eux-mêmes.

Sur la même machine, une base en réseau interne, sans port publié : zéro tentative. Ce n'est pas son mot de passe qui l'a protégée, c'est que personne ne pouvait la joindre.

Un port « caché » (5441) n'a rien reçu pendant 4 mois et 21 jours, puis 25 287 tentatives en 54 minutes, sur un port et un nom d'utilisateur uniquement. Trois heures avant, il y avait de l'activité d'attaquant dans Metabase, où l'adresse de cette base était écrite en clair. Je ne peux pas affirmer que c'est le même acteur : les IP source ne sont pas journalisées. C'est l'hypothèse la plus cohérente, pas un fait.

Un port inhabituel retarde la découverte par les robots. Il ne protège pas de quelqu'un qui a lu votre configuration. Ne pas être joignable retire le pari.

Combien de vos services écoutent sur Internet sans que vous l'ayez décidé ?

Texte alternatif : frise de 07:15 (mise en ligne) à 09:50 (première tentative), puis trois chiffres : 77 476 tentatives en six mois, 406 par jour, 12 390 noms d'utilisateur essayés.
