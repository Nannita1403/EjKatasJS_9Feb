//* Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
//* a) Pelicula pequeña, menos de 100 minutos, 
//* b) pelicula mediana, mas de 100 minutos y menos de 200 y 
//* c) pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  let peliculaPequeña = [];
  let peliculaMediana = [];
  let peliculaGrande = [];

  for (let i = 0; i < movies.length; i++) {
    const pelicula= movies[i];
    
    if (pelicula.durationInMinutes < 100) {
      peliculaPequeña.push(pelicula);
    } else if (pelicula.durationInMinutes > 200) {
      peliculaGrande.push(pelicula);
    } else {
      peliculaMediana.push(pelicula);
    }
  }

  console.log(peliculaPequeña);
  console.log(peliculaMediana);
  console.log(peliculaGrande);
