# Exercice à réaliser

Je veux créer une vidéothèque, à terme, elle sera en mesure d'accueillir plusieurs centaines, voire milliers d'oeuvres. Pour le moment, je n'ai que 6 films mais je ne veux pas créer d'objets manuellements pour chacun d'eux (passer par une classe à instancier).

J'ai besoin :
- d'un titre
- d'un-e réalisateur-rice
- d'une durée totale en minutes
- d'une durée visionnée (en cours) en minutes
- d'une courte description

Dans un premier temps, j'affiche mes oeuvres dans la console, puis sur la page d'accueil au moyen d'une boucle.

Prochaine étape, calculer les %ages de visionnage par film puis de toute la collection. Ensuite, le temps total visionnable de la vidéothèque. Sur chaque film, j'affiche les durées en heures et en minutes. J'applique un signe disctinctif (fontawesome ?) selon l'état du visionnage (vu à 100% ou non).

---

Pour chaque film, j'ai besoin d'un ID (unique). Grâce à la propriété URLSearchParams, je veux récupérer cet ID sur une page (vue produit) qui affichera la fiche complète de mon film.

/!\ Pensez à définir le lien vers la vue au moyen de l'ID, par exemple :
#### <a href="fiche-film.html?id=xxxxx>>Mon lien</a> xxxxx étant l'id
// const monFilm = new URLSearchParams(window.lcoation.search).get("id");

------------------------------------------------

Maintenant que mon API tourne en local :

Je modifie le fichier models/Movie.js afin d'y mettre mes films personnels
Grâce au système de promesses (JS asynchrone), j'affiche tous les films sur la page accueil ainsi que le détail de chacun d'entre eux en utilisant URLSearchParams (attention, il y a un petit piège)
Je gère les erreurs en affichant un message personnalisé aux utilisateurs
