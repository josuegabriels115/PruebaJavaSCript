
//obtendrías solo uno de los nombres y en mayúscula


const personas = [
    { nombre: "Carlos", edad: 25 },
    { nombre: "Santa", edad: 30 },
    { nombre: "Maria", edad: 22 }
  ];
  
  /*defino la funcion con dos parametros, el nombre del arreglo y el nombre a buscar*/ 
  function buscarPersonas(array, nameFinded) { 

      const persona = array.find(p => p.nombre === nameFinded)/* defino una const donde va  a buscar  en el array 
                                                                el parametro por el metodo find 
                                                                y lo va almacenar */


      return persona ? persona.nombre.toUpperCase() : "No encontrado"; /* Defino una condicional donde si persona == True 
                                                                         entonces me devuelva en mayuscula y si no, entonces
                                                                         devuelve el mensaje No encontrado*/
  }
  const resultado = buscarPersonas(personas,"Ana");
  console.log(resultado);
