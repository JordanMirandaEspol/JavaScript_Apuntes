/*El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:*/
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
/*...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación 
sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará: */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);//Propagacion ...arr