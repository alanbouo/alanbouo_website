# Investigation après une intrusion sans journaux : distinguer « non observé » et « prouvé absent »

## X

Après une intrusion, « on n'a rien vu » et « il ne s'est rien passé » ne sont pas la même phrase.

Sur mon instance Metabase, aucune des 2 875 requêtes de l'outil n'a été exécutée par un compte malveillant. Mais l'injection qui a servi à entrer ne passe pas par ces requêtes. Ce chiffre ne dit rien de ce qu'elle a lu.

Comment écrire une conclusion honnête quand les journaux manquent : https://alanbouo.com/blog/investigation-intrusion-sans-journaux

## LinkedIn

« Non observé » et « prouvé absent » ne sont pas la même phrase. Toute la valeur d'un rapport d'incident tient dans la discipline de ne pas glisser de l'une à l'autre.

Après la compromission de mon instance Metabase, les systèmes n'avaient presque rien gardé. Le journal d'audit est une fonction de l'offre Enterprise : sur la version libre, la table existe et reste vide. Les journaux d'accès du proxy n'avaient jamais été activés. La journalisation des connexions était désactivée sur les bases PostgreSQL.

Ce qui restait, c'était la base interne de l'outil, exploitée ligne à ligne : comptes, connexions, 2 875 exécutions de requêtes. Aucune n'est attribuée à un compte malveillant. C'est beaucoup. Ce n'est pas « il ne s'est rien passé » : l'injection qui a servi à entrer ne passe pas par ces requêtes.

Le test qui aurait tranché une partie de la question, compter les requêtes vers l'endpoint vulnérable, demandait les journaux du proxy. Ils n'existaient pas.

La conclusion que j'ai retenue tient en deux parties : dans l'outil, l'activité est bornée ; en dehors, aucune certitude. Un indicateur qui ne peut pas voir l'événement recherché ne prouve pas son absence.

Vos journaux permettraient-ils de répondre à « qu'ont-ils pris ? », ou seulement à « qu'a-t-on vu ? » ?

https://alanbouo.com/blog/investigation-intrusion-sans-journaux
