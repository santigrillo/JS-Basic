function menorMayor(numeros) {
    // Escribi una función llamada menorMayor que tome como entrada un arreglo de números y devuelva un arreglo 
    // que contenga el menor número del arreglo en la posición cero y el mayor número del arreglo en la posición 1.
    // Ej: menorMayor([4, 6, 1, 7, 15]) // retorna [1, 15] 
}

var numeros =  [4, 6, 1, 7, 15, 25, 99, 3];
console.log (menorMayor(numeros))

function menorMayor(numeros){
    //menor numero
    var menornumero = 99999;
    for (var i = 0; i < numeros.length; i++){
        if (numeros[i]< menornumero){
            menornumero = numeros[i]
        }
    }
    //mayornumero
    var mayornumero = 0;
    for (var x = 0; x < numeros.length; x++){
        if (numeros[x]>mayornumero){
            mayornumero = numeros[x]
        }
    }

var numerosejercicio = [menornumero, mayornumero]
console.log(numerosejercicio)
}


function stringMasLarga(strings) {
    // Escribe una función llamada stringMasLarga, que tome un arreglo de strings llamado 'strings'
    // tu función debe retornar el string más largo que hay en el arreglo
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
    
}

var strings = ["Hola", "Messi", "Argentina", "Chau"]
console.log(stringmaslarga(strings))
function stringmaslarga (strings){
    var palabramaslarga = " ";
    for (var i = 0; i < strings.length; i++){
        if (palabramaslarga.length < strings[i].length){
            palabramaslarga = strings[i]
        }
    }
    return palabramaslarga
}


function buscarAmigo(amigos, nombre) {
    // Escribe una funcion que reciba un array de amigos (objetos) y un nombre (string).
    // Tu función debe devolver el amigo que coincida con el nombre recibido por argumento.
    // Cada amigo tiene las propiedades nombre y edad.
    // Ej:
    //  var amigos = [{ nombre: 'joaco', edad: 33 } , { nombre: 'lucas', edad: 25 }];
    //  buscarAmigo(amigos, 'joaco') // retorna { nombre: 'joaco', edad: 33 };   
}

var amigos = [
    {nombre: 'Mateo', edad: 25,},
    {nombre: 'Pedro', edad: 38,},
    {nombre: 'Santiago', edad: 21,},    
]

console.log(buscarAmigo(amigos, 'Mateo'))

function buscarAmigo(amigos, nombre){
    for (var i = 0; i < amigos.length; i++){
        if (amigos[i].nombre === nombre){
            console.log(amigos[i])
        } 
    }
}

function sumArray(array, n) {
    // Escribir un algoritmo que, dada un arreglo de números ordenados y un número n, 
    // te devuelva true si alguna combinación de dos números cualesquiera suman n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.
    // Ej:
    // sumArray([2,5,7,10,11,15,20], 13)  // retorna true     2+11 suman 13
    // sumArray([2,5,7,10,11,15,20], 14)  // retorna false
}

var array = [2,5,7,10,11,15,20]

function numerorandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function sumArray(array, n){
  for (var i = 0; i < (Math.pow((array.length),(array.length))); i++){
  var sum1 = numerorandom(array)
  var sum2 = numerorandom(array)
  if (sum1+sum2 === n){
    return true
  } 
 }
}

console.log(sumArray(array, 22))

//No sabía bien como resolver este ejercicio, pero hice este programa que quizas se acerca a lo que pide, hice una funcion para que devuelva un numero randon del arreglo. En la función sumArray creo un for el cual contiene dos variables "sumando", estas obtienen un numero random con la funcion numerorandom y son sumadas, el for va a iterar hasta hacer todas las sumas posibles dentro del arreglo y si una de esas sumas da como resultado 'n', devuelve true. Para mi está bien, el unico problema es que puede tomar el mismo numero del array dos veces. Ejemplo, en el ejercicio dice que 14 devuelve false, en este caso daría true, ya que tomaria 7 + 7.


function pluck(array, propiedad) { 
    // Escribi una función llamada pluck,
    // que recibe un array de objetos (array) y el nombre de una propiedad (propiedad).
    // La función va a devolver un nuevo arreglo con solo los
    // valores dentro de la propiedad recibida, por ejemplo:
    // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
    // productos.pluck(productos, 'name') // ['TV LCD', 'Computadora']
    // pista: es una buena oportunidad para usar map.
    
} 

var array = [
    {name: 'Ford', model: '2019', state: 'Nuevo',}, 
    {name: 'Toyota', model: '1987', state: 'Usado',}, 
    {name: 'Nissan', model: '1999', state: 'Destruido',},
    {name: 'Nissan', model: '1799', state: 'Destruido'}
];

var estados = array.map(function(array){
  return array.model
})

console.log(estados)
