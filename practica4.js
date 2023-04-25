/* function crearGato(nombre, edad) {

  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido
  como el argumento "nombre".
  
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor
  definido en el argumento "edad"
  
  // Devuelve el objeto
  
  // Tu código:
  
  } */

  function crearGato(nombre, edad){
    var Gato = {
      nombre: nombre,
      edad: edad
    }
    return Gato
  }

  console.log(crearGato("Garfield", 8))

/*  function agregarPropiedad(objeto, property) {

    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    
    // Devuelve el objeto
    
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del
    argumento llamado "property" (una cadena/string)
    
    // Tu código:
    
    } */

    var objeto = {
      objeto,
    }

    function agregarPropiedad(objeto, property){
        objeto.objeto = property
        return objeto
    } 

    console.log(agregarPropiedad(objeto, 'null'))
    
/*  function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) 

// "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"

// Multiplica el numeroMisterioso por 5 y devuelve el producto

// Tu código:

} */

var objetoMisterioso = {
  numeroMisterioso : prompt ("Ingresar numero misterioso") 
}

console.log(mlpcinco(objetoMisterioso))

function mlpcinco(objetoMisterioso){
  return objetoMisterioso.numeroMisterioso * 5
}

/* function nuevoUsuario(nombre, email, password) {

// Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que
se pasan a la función

// Devuelve el objeto

// Tu código: */

console.log (nuevoUsuario('Santiago', 'correo@gmail.com', 'goku123'))
function nuevoUsuario(nombre, email, password){
  var Usuario = {
    nombre : nombre,
    email : email,
    password : password 
  }
  return Usuario
}

/* function tieneEmail(usuario) {

  // Devuelve "true" si el usuario tiene un valor definido para la propiedad
  "email"
  
  // De lo contrario, devuelve "false"
  
  // Tu código:
  
  } */

  console.log (nuevoUsuario('Santiago','','goku123'))
  function nuevoUsuario(nombre, email, password){
  var Usuario = {
    nombre : nombre,
    email : email,
    password : password 
  }

  if (Usuario.email){
    return true
  } else {
    return false
  }
}


/* function actualizarPassword(usuario, nuevaPassword) {    

// Reemplaza la contraseña existente en el objeto "usuario" con el valor de
"nuevaPassword"

// Devuelve el objeto

// Tu código:

} */

var usuario = {
  nombre : 'nombre',
  email : 'correo@gmail.com',
  password : 'goku123',
};

var nuevaPassword = prompt ("Ingresar nueva contraseña")
console.log(actualizarPassword (usuario, nuevaPassword))
function actualizarPassword (usuario, nuevaPassword){
  usuario.password = nuevaPassword
  return usuario
}

/* function agregarAmigo(usuario, nuevoAmigo) {

  // "usuario" tiene una propiedad llamada "amigos" que es un array
  
  // Agrega "nuevoAmigo" al final de ese array
  
  // Devuelve el objeto "usuario"
  
  // // Tu código:
  
  } */

  var usuario = {
    amigos : ['juan', 'joaquin', 'micaela'],
  }
  
  var nuevoAmigo = prompt ("Ingresar nombre del nuevo amigo")
  console.log(agregarAmigo(usuario, nuevoAmigo))
  function agregarAmigo (usuario, nuevoAmigo){
    usuario.amigos.push(nuevoAmigo)
    return usuario
  }

 /* function pasarUsuarioAPremium(usuarios) {

    // "usuarios" es un array de objetos "usuario"
    
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    
    // Define cada propiedad "esPremium" de cada objeto como "true"
    
    // Devuelve el array de usuarios
    
    // Tu código:
    
    }  */

    var usuarios = [

      {
      
      nombre: "Joaquin",
      
      apellido: "Quiroga",
      
      contraseña: "4561gagsg",
      
      esPremium: false
      
      },
      
      {
      
      nombre: "Ester",
      
      apellido: "Molina",
      
      contraseña: "2222/",
      
      esPremium: true
      
      }
      
      ]

      console.log (pasarUsuarioAPremium(usuarios))
    function pasarUsuarioAPremium(usuarios){
      for (i = 0; i < usuarios.length; i++){
        usuarios[i].esPremium = true
      }
      return usuarios
    }

 /* function sumarLikesDeUsuario(usuario) {

// "usuario" tiene una propiedad llamada "posts" que es un array

// "posts" es un array de objetos "post"

// Cada objeto "post" tiene una propiedad llamada "likes" que es un entero
(int/integer)

// Suma todos los likes de todos los objetos "post"

// Devuelve la suma

// Tu código:

} */

var usuarios = [ {
  nombre: "Joaquin",
  
  apellido: "Quiroga",
  
  esPremium: false,
  
  posts: [
  
  {Dislikes: 155,Likes: 566,Rettweets: 677,},
  
  {Dislikes: 11,Likes: 897,Rettweets: 2,},
  
  ]
}
]

function sumarLikesDeUsuario(usuarios){
  var suma = 0;
  for (var i = 0; i < (usuarios.posts).length; i++){
    suma = suma + usuarios.posts[i].Likes;
  }
  return suma
}

console.log(sumarLikesDeUsuario(usuarios))
