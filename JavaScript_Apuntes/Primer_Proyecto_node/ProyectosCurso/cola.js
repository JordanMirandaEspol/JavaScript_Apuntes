/*Defina una funcion proximaFila que tome un arreglo y un numero como argumento. Agrega numero al final del arreglo y
luego la función debe eliminar el primer elemento la funcion debe retornar el elemento que fue eliminado*/

function proximoFila(arreglo,proximo){
    arreglo.push(proximo);//Inserta elemento a lo ultimo
    elementoDespachado=arreglo.shift();//Remueve el primer elemento
    return elementoDespachado;
}
var miArreglo=[0,1,2];
console.log("Arreglo antes: "+JSON.stringify(miArreglo));

elementoDespachado=proximoFila(miArreglo,3);
console.log(JSON.stringify(elementoDespachado));

console.log("Arreglo despues "+ JSON.stringify(miArreglo));
