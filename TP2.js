


const objeto = {
    frase: function() {
      console.log('Hola Mundo')
    },
    prom: function(array) {
        let sumador = 0
        for (i = 0; i < array.length; i++){
            sumador = sumador + array [i]
        }
        return (sumador/array.length)
    }
  }

  objeto.frase();
  var array = [1,4,5,6,7,2]
  objeto.prom(array);
  delete objeto.frase;
  objeto;
