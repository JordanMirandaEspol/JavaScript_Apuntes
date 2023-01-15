/*En JavaScript, usualmente no necesitas nombrar tus funciones, 
  especialmente cuando se pasa una función como argumento a otra función. 
  n su lugar, creamos funciones inline (en línea). 
  No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.
  */
const magic = ()=> {
    return new Date();
  };

  /*Funcion flecha con parametros  */
  const myConcat = (arr1, arr2)=>arr1.concat(arr2);
  console.log(myConcat([1, 2], [3, 4, 5]));


 /*Funcion flecha con parametros por defecto */
    const increment = (number, value=1) => number + value;

 /*Para ayudarnos a crear funciones más flexibles, ES6 introduce el parámetro rest para los parámetros de función 
 Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos.
 Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.
 */
 const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);//.reduce permite sumar los valores de un array
  }


