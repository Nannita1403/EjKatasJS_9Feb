//* Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//*en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//* pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

  function hayDuplicates(duplicados) {
    // conjunto set = para elementos unicos
    let alimentos = new Set(duplicates);

    for (let comidas of duplicados) {
      if(alimentos.has(comidas)) {
        return true // hay duplicados
      }
      alimentos.add(comidas);
    }
    return false; // no hay duplicados
    }


    if (hayDuplicates(duplicates)) {
      console.log('Hay elementos duplicados en el array.');
    } else {
      console.log('No hay elementos duplicados en el array.');
    }

  //? eliminación de duplicados
   //* set no permite elementos duplicados. 

   // Creo una lista con elementos unicos
    const uniqueSet = new Set(duplicates);
    
    console.log(uniqueSet);
  // convertir el set en array nuevamente
    const sinDuplicados = Array.from(uniqueSet);

    console.log(sinDuplicados);
   
