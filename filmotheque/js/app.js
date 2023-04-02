// Définition des films
const movies = [
  {
  id: 1,
  titre: "Inception",
  realisateur: "Christopher Nolan",
  DureeTotal: 148,
  DureeRegarde: 148,
  description:
  "Dom Cobb est un voleur expérimenté, le meilleur qui soit dans l'art dangereux de l'extraction.",
  },
  {
  id: 2,
  titre: "Interstellar",
  realisateur: "Christopher Nolan",
  DureeTotal: 169,
  DureeRegarde: 101,
  description:
  "Le destin de l'humanité est en jeu alors qu'un groupe d'explorateurs parcourt l'espace à la recherche d'une nouvelle maison pour l'humanité.",
  },
  {
  id: 3,
  titre: "The Dark Knight",
  realisateur: "Christopher Nolan",
  DureeTotal: 152,
  DureeRegarde: 152,
  description:
  "Batman lutte contre le crime dans Gotham City avec l'aide du lieutenant de police Jim Gordon et du procureur Harvey Dent.",
  },
  {
  id: 4,
  titre: "The Shawshank Redemption",
  realisateur: "Frank Darabont",
  DureeTotal: 142,
  DureeRegarde: 71,
  description:
  "Deux hommes emprisonnés se lient d'amitié sur plusieurs décennies, se soutenant mutuellement dans leur libération de prison.",
  },
  {
  id: 5,
  titre: "Pulp Fiction",
  realisateur: "Quentin Tarantino",
  DureeTotal: 154,
  DureeRegarde: 77,
  description:
  "Le film est connu pour sa structure narrative non linéaire, qui interconnecte plusieurs histoires à travers des événements de braquages, de violence et de drogue à Los Angeles.",
  },
  {
  id: 6,
  titre: "Forrest Gump",
  realisateur: "Robert Zemeckis",
  DureeTotal: 142,
  DureeRegarde: 106,
  description:
  "Forrest Gump, un homme simple d'esprit, se retrouve dans des situations extraordinaires tout en touchant la vie de nombreuses personnes dans le monde entier.",
  },
  ];
  
  // Affichage des films sur la page
  const moviesDiv = document.getElementById("movies");
  const btn = document.querySelector('.btn');
  
  for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  
  movieDiv.innerHTML = 
  `<h2>${movie.titre}</h2> 
  <p>Réalisateur-rice : ${movie.realisateur}</p> 
  <p>Durée totale : ${Math.floor( movie.DureeTotal / 60 )}h${movie.DureeTotal % 60}min</p> 
  <p>Durée de visionnage : ${Math.floor( movie.DureeRegarde / 60 )}h${movie.DureeRegarde % 60}min</p>` ;
  
  // Création de l'image pour les films regardés en entier
  if (movie.DureeTotal === movie.DureeRegarde) {
    const img = new Image();
    img.src = "../img/check.svg";
    movieDiv.appendChild(img);
    movieDiv.appendChild(btn);
  }
  
  // Création du lien avec l'ID du film
  const link = document.createElement("a");
  link.href = `fiche-film.html?id=${movies.id}`;
  link.textContent = 'Voir la fiche du film';
  movieDiv.appendChild(link);
  moviesDiv.appendChild(movieDiv);
  
 

  }

  



