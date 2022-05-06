function removeEvenValues(obj) {
    // your code here
    for (var value in obj){
        if (typeof obj[value] === 'number') {         // Verificamos si sus propiedades son un número
            if (obj[value] % 2 === 0) {               // Si es cierto, comprobamos si es un número par.
                delete obj[value]                     // Si es verdadero, eliminamos las propiedades.
            } else {
                obj[value];                           // Si no, no hacemos nada...
            }
        } else {
            obj[value]                                // Si no es un número, no hacemos nada...
        }
    }
    return obj;                        
        
        }
        
var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj);


  
