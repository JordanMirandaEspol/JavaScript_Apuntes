var miArreglo=["John",24];

console.log("Tu nombre es: "+miArreglo[0]+" y tu edad es: "+miArreglo[1]);
var l= miArreglo.length;
//Arreglos anidados
var listaEstudiante=[["Jordan",90],["Juan",65]];
console.log("Tu nombre es: "+listaEstudiante[0][0]+" y tu nota es: "+listaEstudiante[0][1]);

//Modificar valores array


var miArreglo2=[24,45];
miArreglo2[1]="Hola";
console.log(miArreglo2);
//.push agregar elementos arreglos
var estaciones=["Invierno","Verano","Otoño"];
estaciones.push("Primavera");
console.log(estaciones);
//.pop remover elemento de un arreglo
estaciones.pop();//remueve el ultimo elemento
estacion=estaciones.pop();//pop puede retorna elemento
//.shift permite remover el primer elemento
primeraEstacion=estaciones.shift();//Tambien retorna valor
console.log(primeraEstacion);
//unshift agregar elemento al principio de un arreglo
estaciones.unshift("Invierno");//Se agrega al principio del arreglo
console.log(estaciones);