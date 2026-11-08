# Base PostgreSQL exposée sur Internet : 2 h 35 avant la première attaque

## X

Une base PostgreSQL mise en ligne à 07:15. Première tentative d'authentification depuis Internet à 09:50. Deux heures trente-cinq.

Sur une seule de mes bases : 77 476 tentatives en six mois, 12 390 noms d'utilisateur essayés. Sur la même machine, une base sans port publié : zéro tentative sur toute la période.

Et le port « caché » qui a tenu 4 mois et 21 jours, avant 25 287 tentatives en 54 minutes : https://alanbouo.com/blog/base-postgresql-exposee-internet

## LinkedIn

Une base de données publiée sur Internet est attaquée en quelques heures, pas en quelques semaines. Chez moi : 2 h 35 entre la mise en ligne et la première tentative d'authentification.

J'ai relu six mois de journaux de mes bases PostgreSQL, que Docker publiait sur Internet sans que je le sache. Sur l'une d'elles, 77 476 tentatives, en moyenne 406 par jour, de jour comme de nuit. Les noms essayés ne sont pas pris au hasard : keycloak, strapi, airflow, n8n, supabase_admin. Ce sont les rôles que des logiciels courants de l'auto-hébergement créent par défaut. Les robots connaissent la pile de ceux qui hébergent eux-mêmes.

Sur la même machine, une base en réseau interne, sans port publié : zéro tentative. Ce n'est pas son mot de passe qui l'a protégée, c'est que personne ne pouvait la joindre.

Une autre base écoutait sur un port inhabituel. Rien pendant 4 mois et 21 jours, puis 25 287 tentatives en 54 minutes, visant ce seul port. Mon hypothèse, que je présente comme telle : son adresse a été lue dans Metabase, où elle était écrite en clair. Un port inhabituel retarde les robots ; il ne protège pas d'un attaquant qui a lu votre configuration.

Le mot de passe n'est qu'un pari contre ce volume. Ne pas être joignable retire le pari.

https://alanbouo.com/blog/base-postgresql-exposee-internet
