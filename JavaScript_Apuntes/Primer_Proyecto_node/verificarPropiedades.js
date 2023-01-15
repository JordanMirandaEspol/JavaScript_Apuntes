var miCuaderno={
"color":"Azul",
"categoria":3,
"precio":4.56
};
console.log(miCuaderno.hasOwnProperty("color"));//Sirve para verificar si la propiedad esta en el objeto
console.log(miCuaderno.hasOwnProperty("Numero de paginas"));//Sirve para verificar si la propiedad esta en el objeto



function verificarPropiedad(obj, propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "Propiedad: "+obj[propiedad];
    }
    else{
        return "El objeto no tiene esta propiedad";
    }
}

console.log(verificarPropiedad(miCuaderno,"color"));