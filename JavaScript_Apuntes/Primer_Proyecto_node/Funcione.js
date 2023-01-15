function miFuncion(){
    console.log("Hola es mi primera funcion");
}
miFuncion();

//Funciones con argumentos
function miFuncionArg(nombre){
    console.log("Hola tu te llamas: "+ nombre);
}
function sumar(numero1,numero2){
    var suma= numero1+numero2;
    console.log("Tu suma es: "+suma);
}
miFuncionArg("Jordan");
sumar(1,2);