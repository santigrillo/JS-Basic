function invocarCallback(cb) {
    // Invoca al callback `cb`
    // Aqui tu codigo:

    var usuario = prompt ("Ingresar nombre de usuario");

    function crearPresentacion (usuario, callback){
      return callback(usuario);
    }
    function entrada (usuario){
      return "Hola soy " + usuario;
    }
    function curso(usuario){
      return usuario + " tu curso es de Javascript";
    }

    console.log(crearPresentacion(usuario, entrada));
    console.log(crearPresentacion(usuario, curso));
}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    // Aqui tu codigo

    var numeros = [1, 2, 2.1, 2.3, 3, 6, 7.5, 8, 10, 13];

    function sumarray (numeros){
      var total = 0;
      for (var i = 0; i <= numeros.length; i++){
        if (numeros[i] % 1 === 0){
          total += numeros[i];
        }
      }
      return total;
    }

    var sumaenteros = (sumarray(numeros));
    callback(sumaenteros, mostrar);

    function callback(sumaenteros, cb){
      return cb(sumaenteros);
    }

    function mostrar (sumaenteros){
      console.log(sumaenteros);
    }


}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
    // Aqui tu codigo


}

function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    // Aqui tu codigo
}
