//* Probando For: Usa un bucle for para recorrer todos los destinos del array y 
//* elimina los elementos que tengan el id 11 y 40. 
//* Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]


for (let i = 0; i < placesToTravel.length; i++) {

    let places = placesToTravel[i];

    if (places.id === 11 || places.id === 40) {
        placesToTravel.splice(i, 1)
        i --;
    }   
}
console.log(placesToTravel);


// quise hacerlo con filter para crear un nuevo array pero no lo logre completar.. 
let arrayFiltrado = placesToTravel.filter((id) => placesToTravel[id] !== 11,40);

console.log(arrayFiltrado);