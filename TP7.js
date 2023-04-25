                          function Proto() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Pista, utilizar: __proto__
    // Tu código:
}

var vehiculo= {
    marca: "Default",
    modelo: "Default",
    getMarca: function(){
      return this.marca + " modelo " + this.modelo
    },
}

var toyota = {
  marca: "Hilux",
  modelo: "2012"
}

toyota.__proto__ = vehiculo;
console.log(toyota.getMarca());


                            function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
}

function usuario (nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

usuario.prototype.saludar = function(){
return "Hello World!";
}

var Santiago = new usuario("Santiago", "Grillo");

console.log(Santiago.saludar())

                              function changeNombre() {
    // Crea un objeto
    // Agregar un getNombre()
    // Agregar un changeNombre()
    // Mostrar por consola changeNombre() y getNombre(), con nombre distinto en changeNombre() al del constructor
    // y al del getNombre()
    // Tu código:
}

var Usuario = {
  nombre : nombre,
  apellido : "Grillo",
  getNombre : function(nombre){
      return "Hola, mi nombre es " + nombre;
  },
  changeNombre: function(otronombre){
    return "Nombre cambiado a " + otronombre;
  },
}

var nombre = "Santiago";
var otronombre = "Pablo";
console.log(Usuario.getNombre(nombre));
console.log(Usuario.changeNombre(otronombre));

                                function Object() {
    // Crea un objeto
    // Luego crea otro objeto en donde el sea su padre y ademas se cree como nuevo objeto
    // Utilizar obligatoriamente el Metodo Object
    // Tu código:
}


var persona = {
nombre: "default",
apellido: "default",
edad: "default",
presentacion: function(){
return ("Me llamo " + this.nombre +" "+ this.apellido + " y tengo " + this.edad + " años");
}
}

var Santiago = Object.create(persona);
Santiago.nombre = "Santiago";
Santiago.apellido = "Grillo";
Santiago.edad = 20;
console.log(Santiago.presentacion());

                          function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse() => menem
    // 'joaco'.reverse() => 'ocaoj'
    // Pista: Necesitarás usar "this" dentro de "reverse"

}

var nombre = "Santiago";
console.log(invertirString(nombre));

function invertirString (nombre){
  var nombreInv = this.nombre.split('');
    console.log(nombreInv.reverse().join(''));
}
