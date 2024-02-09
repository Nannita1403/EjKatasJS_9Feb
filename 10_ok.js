//* Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(prom) {

  let average = 0;
  for (const num of prom){
    average += num / prom.length;
  }
  return average;
}
 average(numbers);

console.log(average(numbers));