  function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
    function Usuario(usuario, nombre, email, password){
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
      this.saludar = function(){
          return "Hola, mi nombre es" + this.nombre
      }
    }
    const Santiago = new Usuario ("santigrillo", "Santiago", "admsanti90@gmail.com", "clave")
    console.log(Santiago)
  }

  function creaObj() {
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:

    function datosPersona(nombre, apellido, dni){
          this.nombre = nombre;
          this.apellido = apellido;
          this.dni = dni;
        }

        var Juan = new datosPersona("Juan", "Perez", 10132817)
        var Maria = new datosPersona("Maria", "Gonzalez", 32812666)

        console.log(Juan)
        console.log(Maria)
  }

  function creaObj2() {
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:

  }

  function Computador() {
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:

    function Computador(id, marca, procesador, ram, ssd){
      this.id = id;
      this.marca = marca;
      this.procesador = procesador;
      this.ram = ram;
      this.ssd = ssd;
      this.inicio = function(){
        return "Iniciando..."
      }
      this.specs = function(){
        console.log("Su computadora es de " + this.marca)
        console.log("Tiene un procesador " + this.procesador)
        console.log("Tiene " + this.ram + " de RAM y un SSD de " + this.ssd)
      }
    }

var MacBookAir = new Computador("#3129", "Apple", "Intel i9 10105F", "16GB", "512GB")
MacBookAir.inicio()
MacBookAir.specs()

  }
