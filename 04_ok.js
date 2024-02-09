
//? Avengers: 
//* 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

//* 1.2 Cambia el primer elemento de avengers a "IRONMAN"

//* 1.3 console numero de elementos en el array usando la propiedad correcta de Array.

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//*1,1
console.log(avengers[0]);

//*1.2
avengers[0] = "IRONMAN";

//*1.3
console.log(avengers.length);

console.log(/-----------------------------------------------------------/);
//? Rick and Morty:

//* 1.4 Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty","Summer");

console.log(rickAndMortyCharacters.length-1);
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//* 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.

//* 1.6 Elimina el segundo elemento del array y muestra el array por consola.


const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

//* 1.5
rickAndMortyCharacters2.pop();
console.log(rickAndMortyCharacters2);

console.log(rickAndMortyCharacters2[0] , rickAndMortyCharacters2[rickAndMortyCharacters2.length-1]);



