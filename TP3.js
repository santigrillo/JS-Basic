function Obtener(obj) {
    //Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo
    var obj = {
  nombre: "Santiago",
  apellido: "Grillo",
  curso: "Javascript"
 }

console.log(obtener(obj))

function obtener (obj){
  console.log(Object.keys(obj))
  console.log(obj)
    }
}
function Fecha(num) {
    //Escriba una función de JavaScript para obtener el día de una fecha en particular.
    //Aqui tu codigo

}
function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    var usuario = {nombre: "Santiago", apellido: "Grillo", password: "Goku123"}
    var password;
        password = prompt ("Ingresar contraseña a verificar")

        console.log(verificarPassword(usuario, password))

    function verificarPassword (usuario, password){
      if (usuario.password === password){
        return true
      } else {
        return false
      }
    }

}
function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    var nombre = "Nacho"
    var edad = 23

    console.log(crearGato(nombre, edad))

    function crearGato(nombre, edad){
        var Gato = {
            nombre: nombre,
            edad: edad,
            meow: function(){
                console.log("Meow!")
            }
        }
    console.log(Gato)
    Gato.meow();
    }
}
function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:

var precio = prompt("Ingresar precio");
var porcentaje = prompt ("Ingresar descuento");

console.log(agregarMetodoDescuento(precio, porcentaje))

function agregarMetodoDescuento(precio, porcentaje){

  var producto = {
  precio: precio,
  porcentaje: porcentaje,
  totalcondescuento: function(precio, porcentaje){
    console.log (precio-(precio*porcentaje/100))
  }
}
producto.totalcondescuento(precio, porcentaje);
  }
}
function ordenar(array) {
    // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:

var array = [1, 5, 2, 4, 3, 6, 9, 7, 8];

console.log(ordenar(array))

function ordenar(array){
  array.sort(function(a, b){
  return a - b;
});
  console.log(array)
}
}
