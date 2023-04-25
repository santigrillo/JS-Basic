// Crear una variable y una constante.

var nombre = "Joaquin";
const dedosmano = "5";

//Crear una funcion.

var saludo ="Hola mundo";

console.log(xda(saludo));

function xda(saludo) {
  return saludo;
}

//Hacer una función y enviarle parametros.

var par = "Soy un parametro";

console.log(xda(par));

function xda(par) {
  return par;
}

//Hacer una funcion que multiplique a * b

var a = 20;
var b = 10;

console.log (multiplicacion(a, b))

function multiplicacion (a, b){
  return (a * b);
}

//Hacer una funcion para mostrar nombre, apellido y DNI enviados por parametros.

var xnombre = "Juan";
var apellido = "Perez";
var dni = "10529128";


console.log(prdos(xnombre, apellido, dni))

function prdos (xnombre, apellido, dni){
  console.log ("Su nombre es", xnombre, apellido, "y su DNI es", dni);
}

//Crear un if que devuelva el valor "Hola"

var edad = 19;

if (edad > 18){
  console.log("Hola");
} else {
  console.log("Acceso denegado");
}

//Crear un if donde si es verdadero devuelva Hola Mundo, y si no, error.

var cargo = "admin";

if (cargo == "admin"){
  console.log("Hola mundo");
} else {
  console.log("Error");
}

//-- RESTANTE --//

/* - Crea una función.

- Coloca la palabra, (nombre) por parámetros.

- Si su valor es "Español", retorna el valor de "Hola"

- Si su valor es "Chino", retorna el valor de "Chao"

- Si su valor es "Portugues", retorna el valor de "ola"

- Caso contrario si el valor es false devuelve "Error, Ingrese un idioma válido".

- Muestra su resultado. */

var nombre;
nombre = prompt ("Ingrese idioma");

console.log (traduccion(nombre));

function traduccion (nombre){
    if (nombre == "Español"){
        return "Hola";
    } else {
        if (nombre == "Chino"){
            return "Chao";
        } else {
            if (nombre == "Portuges") {
                return "Ola";
            } else {
                return "Ingrese un idioma valido";
            }
        }
    }
}

/* Crea una función.

- Coloca la palabra, (nombre y Dni) por parámetros.

- Si nombre y edad coinciden con tu verdadero nombre y apellido,

retorna "Hola mi Nombre es ... y mi Dni es ..."

- Caso contrario si el valor es false devuelve "Error, Este/a no soy yo".

- Muestra su resultado. */

var nombre;
    nombre = prompt ("Ingresar nombre");
var dni;
    dni = prompt ("Ingresar DNI");

console.log(verificacion(nombre, dni))

function verificacion (nombre, dni){
    if ((nombre == "Santiago") && (dni == "44019421")){
        console.log("Este soy yo");
    } else {
        console.log("Error, este no soy yo");
    }
}


