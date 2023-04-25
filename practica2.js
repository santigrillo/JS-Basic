//Hacer una funcion que devuelva true si el parametro num es mayor que 50, y sino, devuelve false.

var num;
num = prompt ("Ingrese un número");


console.log(mayorcin(num))

function mayorcin (num){
    if (num > 50) {
        return "true"
    } else {
        return "false"
    }
}

///Hacer una funcion que devuelva true si el parametro num es menor que 90, y sino, devuelve false.

var num;
num = prompt ("Ingrese un número");

console.log(menor(num))

function menor(num){
    if (num < 90) {
        return "true"
    } else {
        return "false"
    }
}

//Comparar longitud de cadenas

var nombreu;
var nombred;

nombreu = prompt ("Ingresar nombre uno")
nombred = prompt ("Ingresar nombre dos")

console.log(comparacion(nombreu, nombred))

function comparacion (nombreu, nombred) {
    if (nombreu.length == nombred.length) {
        return "true";
    } else {
        return "false";
    }
}

//Funcion si "x" e "y" son iguales devuelve true y sino, false.

var x;
var y;

x = prompt ("Ingresar nombre uno")
y = prompt ("Ingresar nombre dos")

console.log(comparacion(x, y))

function comparacion (nombreu, nombred) {
    if (x == y) {
        return "true";
    } else {
        return "false";
    }
}

//Devolver resto de "x" e "y"

var x;
var y;

x = prompt ("Ingrese un numero");
y = prompt ("Ingrese otro numero");

console.log(resto(x, y));

function resto (x, y) {
    return (x%y);
}

//Funcion si numero  es par devuelve true, sino, false

var numero;

numero = prompt ("Ingresar numero")

console.log (par(numero))

function par (numero) {
    if (numero % 2 == 0) {
        return "true"
    } else {
        return "false"
    }
}

//Funcion si numero  es impar devuelve true, sino, false.

var numero;

numero = prompt ("Ingresar numero")

console.log (impar(numero))

function impar (numero) {
    if (numero % 2 != 0) {
        return "true"
    } else {
        return "false"
    }
}

//Funcion num al cuadrado.

var num;
num = prompt ("Ingresar numero");

console.log (potencia(num))

function potencia(num){
    return Math.pow(num, 2);    //Para raiz Math.sqrt
}

//Funcion num elevado a exponent

var num;
num = prompt ("Ingresar base");
var exponent;
exponent = prompt ("Ingresar exponente");

console.log (potencia(num, exponent))

function potencia(num, exponent){
    return Math.pow(num, exponent); 
}

//Funcion redondear hacia arriba.

var num;
num = prompt ("Ingresar numero a redondear")

console.log (redondea(num))

function redondea (num){
    return Math.ceil(num);     // Math.floor -> Redondea al menor posible.
}                              // Math.round -> Redondea.