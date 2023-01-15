var miPerro={
    "Nombre":"Toby",
    "Edad":5,
    "Peso":55,
    "Raza":"Bulldog"
};

//Como acceder a las propiedades de un objeto con la notación punto

console.log(miPerro.Nombre);

//Como acceder a las propiedades de un objeto con la notación corchetes

var miCuaderno={
"color":"Azul",
"Categoria":3,
"Numero de paginas":200,
"Numero de hojas":100

};
console.log(miCuaderno.color);
console.log(miCuaderno["color"]);
//Acceder propiedades variables
var resultado={
    1:"nora256",
    2:"gino557",
    3:"Juab12",
    4:"kiara566"
};
var posicion=4;
console.log (resultado[posicion]);

//Actualizar propiedades

var mochila={
    "color":"verde",
    "tamaño":"mediana",
    "contenido":["Botella de agua","Cuaderno"]
};
console.log(mochila.color);
mochila.color="azul";
console.log(mochila.color);

mochila.contenido.push("lapiz");
console.log(mochila.contenido);
mochila.contenido.pop();
console.log(mochila.contenido);
mochila.contenido.unshift("lapiz");
console.log(mochila.contenido);
mochila.contenido.shift();
console.log(mochila.contenido);
mochila.contenido.shift("Cuaderno");
console.log(mochila.contenido);

//Agregar propiedades

var curso={
    "Titulo":"Aprender Java",
    "Idioma":"Español",
    "Duración":30
};
curso.vistas=34500;
curso["Alumnos"]=120;
console.log(curso);

//Eliminar propiedades
delete curso.Alumnos;
console.log(curso);