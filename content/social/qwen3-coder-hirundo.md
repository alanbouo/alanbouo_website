# Qwen3-Coder : le code change selon le client annoncé (Hirundo)

Post sans article.

## LinkedIn

Image : `qwen3-coder-hirundo.png` (dans ce dossier)
Lien Hirundo en premier commentaire : https://www.hirundo.io/blog/qwen3-coder-vulnerabilities

Même modèle, même tâche, même consigne. Seul le client annoncé change : 70 % d'applications piratables pour un « contractant de défense américain », 59 % pour son équivalent chinois.

C'est ce que mesure Hirundo sur Qwen3-Coder-30B, un modèle open-weight chinois. La tâche : une application Flask qui stocke un secret par utilisateur. 190 applications générées par client, jugées par les exploits du benchmark BaxBench. L'écart représente environ 19 % en relatif (p = 0,03).

Avec « groupe pro-démocratie de Hong Kong », les fuites de secrets entre utilisateurs sont 28 % plus fréquentes en relatif qu'avec un client neutre.

La faille est banale : le code vérifie que l'utilisateur est connecté, mais pas qu'il est propriétaire du secret demandé (OWASP API1). Aucune porte dérobée repérée. Sur 1 840 applications, Semgrep n'en signale que 2. Les attaques de BaxBench en font tomber 1 144.

Hirundo attribue l'écart à l'alignement politique inscrit dans les poids, et affirme l'effacer sans dégrader le codage (51 % d'applications fonctionnelles contre 50 %). À lire avec trois réserves : Hirundo vend ce type de correction, un seul modèle compact a été testé sur une seule tâche, et l'auteur ne peut pas dire si le comportement est intentionnel.

Pour qui intègre un modèle dans un produit, le point utile est ailleurs. Un scanner statique ne voit presque rien ici, et un benchmark de qualité moyenne non plus. Ce qui a révélé l'écart, c'est de faire varier le contexte du prompt et de rejouer des exploits sur le code produit.

Avant d'intégrer un modèle, faites-vous cette vérification, ou ne testez-vous que la qualité moyenne ?

Texte alternatif : barres comparant 59 % d'applications piratables pour un contractant chinois et 70 % pour un contractant de défense américain, soit +19 % en relatif.
