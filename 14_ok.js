//*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
// Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function contarRepeticiones(list) {
    let contador = {}
    for (let i = 0; i < list.length; i++) {

      const palabra = list[i];
       
      if (contador[palabra]) {
        contador[palabra]++;
      } else {
        contador[palabra] = 1;
      }
    }
      return contador;
  }
    const resultado= contarRepeticiones(counterWords);
    console.log(resultado);
  
  