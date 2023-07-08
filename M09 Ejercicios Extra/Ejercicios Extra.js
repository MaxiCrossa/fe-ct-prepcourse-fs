/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPadre = [];

   for (var prop in objeto){ //recorre la propiedad en el objeto
      var arrayHijo = [];
      arrayHijo.push(prop); //asi pusheamos el nombre LA PROPIEDAD (o sea la clave)
      arrayHijo.push(objeto[prop]); //aca pusheo el valor de la propiedad
      arrayPadre.push(arrayHijo); //aca pusheo el array hijo al array padre con su par clave:Valor
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   var array = string.split(""); //metemos el string en el array y separamos
   array.sort()

   for (var i of array){
      var cantidad = objeto[i] || 0;
      objeto[i] = cantidad + 1;
   }
   return objeto;
}
var string = 'hqqkashkdashdkjhasfjkas';
console.log(numberOfCharacters(string));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var minusc = '';
   var mayusc = '';
   //
   for (var i = 0; i < string.length; i++){
      if(string[i]===string[i].toUpperCase()){
         mayusc += string[i];
      } else {
         minusc += string[i];
      }
   }
   return mayusc + minusc;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var separarFrase = frase.split(" ");
   for (var i = 0; i < separarFrase.length; i++){
      var invertirPalabra = separarFrase[i].split("").reverse().join("");

      separarFrase[i] = invertirPalabra;
   }
   return separarFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroEnLetras = numero.toString();
   var numeroSeparado = numeroEnLetras.split("");
   var numeroInvertido = numeroSeparado.reverse();
   var numeroUnido = numeroInvertido.join("");

   if (numeroEnLetras === numeroUnido){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString = '';
   for (var i = 0; i < string.length; i++){
      if (string[i] !== "a" && string[i] !== "b" && string[i] !== "c"){
         nuevoString = nuevoString + string[i]
      }
   }
   return nuevoString;
}
var string = 'abcdefg'
console.log(deleteAbc(string));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var arregloPorLongitud = [];

   for (var i = 0; i < arrayOfStrings.length; i++){
      var min = Infinity;
      var aux = 0;
      for (var j = 0; j < arrayOfStrings.length; j++){
         if (arrayOfStrings[j].length < min && !arregloPorLongitud.includes(arrayOfStrings[j])){
            var min = arrayOfStrings[j].length;
            var aux = j;
         }
      }
      arregloPorLongitud.push(arrayOfStrings[aux])
   }
   return arregloPorLongitud;

   //tambien se puede
   //return arrayOfStrings.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var newArray = [];

   array2.forEach(elem => {
      if(array1.includes(elem)){
         newArray.push(elem);
      }
   })
   return newArray;
}
var array1 = [4,2,3];
var array2 = [1,3,4];
console.log(buscoInterseccion(array1, array2))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
