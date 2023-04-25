//Hacer una funcion que devuelva el numero mayor entre dos numeros.

var x;
    x = prompt ("Ingresar primer numero")
var y;
    y = prompt ("Ingresar segundo numero")

console.log(comparacion(x, y))

function comparacion (x, y){
    if (x > y) {
        return x
    } else {
        return y
    }
}

//Funcion devuelve true si el numero es 10 o 5

var numero;
    numero = prompt ("Ingresar numero a comparar")

console.log (diez(numero))

function diez(numero){
    if ((numero == 10) || (numero == 5)) {
        return true;
    } else {
        return false;
    }
}

//Devuelve true si es menor a 50 y mayor a 20.

var numero;
    numero = prompt ("Ingresar numero")

console.log (menor(numero))

function menor (numero){
    if ((numero < 50) && (numero > 20)){
        return true;
    } else {
        return false;
    }
}

//Funcion devuelve true si el numero es entero

var numero = 20;
console.log(entero(numero))

function entero (numero){
  if(Number.isInteger(numero)){
    return true;
  } else {
    return false;
  }
}

//Funcion si es divisible entre 3 devuelve fizz, si es divisible en 5 devuelve buzz y si es por ambos, devuelve fizzbuzz

var numero = 15;
console.log(divisor(numero))

function divisor (numero){
    if ((numero % 5 == 0) && (numero % 3 == 0)){
        return "fizzbuzz"
        } else {
        if(numero % 5 == 0){
            return "buzz"
        } else {
            if (numero % 3 == 0) {
                return "fizz"
            }
        }
    }
}

//Funcion true si el numero es primo.

var numero;
  numero = prompt ("Ingresar numero") 
console.log (primo(numero))

function primo(numero){
    if (numero % 2 == 0){
        return false
    } else {
        return true
    }
}

//Devuelve el primer arreglo de un array.

var numeros = [3,1,2];
console.log(primer(numeros))

function primer(numeros){
    return (numeros[0])
}

//Devuelve el ultimo.

var numeros = [3,1,2];
console.log(ultimo(numeros))

function ultimo (numeros){
    return numeros.pop()
}

//Sumar 1 a cada elemento del arreglo.

var array = [1, 2, 3]
console.log(sumar(array))

function sumar (array){
    for (i = 0; i < array.length; i++){
        array[i] = array[i] + 1
    }
        return array
}

//Comprueba si el elemento existe dentro de "array", Devuelve "true" si está, o "false" si no está

var array = [9,2,3,1,4,5];
var elemento = 9;

console.log (busqueda (array, elemento))

function busqueda (array, elemento){
    if (array.includes(elemento) == true){
        return true
    } else {
        return false
    }
}

//Funcion devuelve el promedio de un arreglo de resultados de un test

var resultado = [10, 5, 8, 9, 9, 10, 7, 8.5, 6]
console.log(promedio(resultado))

function promedio (resultado){
    var cont = 0; 
    var M = resultado.length;
        for (i = 0; i < M; i++){
            cont = cont + resultado[i];
        }
    return cont / M
}

//function multiplicarArgumentos() {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0
// Si se pasa un argumento, simplemente devuélvelo
// Tu código:

var array = [1,2,3,4]

console.log (func1 (array))

function func1 (array){
    if (arguments.length > 0){
        for (i = 0; i < array.length; i++){
            console.log (array[i] * 2);
        }
    } else {
        console.log (0);
    }
}

//No entendí este ejercicio. 