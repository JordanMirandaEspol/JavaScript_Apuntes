function clasificarValor(valor){
    var respuesta;
    switch(valor){
        case 1:
            respuesta ="alpha";
            break;
        case 2:
            respuesta="beta";
            break;
        case 3:
            respuesta="gamma";
            break;
        case 4:
            respuesta="delta";
            break; 
        default:
            respuesta="Valor invalido";
            break;
    }
    return respuesta;
}

valor=clasificarValor(5);
console.log(valor);

// switch asignacion multiple

function Volumen(valor){
    var respuesta;
    switch(valor){
        case 1:
            respuesta ="baja";
            break;
        case 2:
        case 3:
            respuesta="Intermedia";
            break;
        case 4:
        case 5:
            respuesta="Alto";
            break;
    }
    return respuesta;
}

console.log(Volumen(4));

//Retornar valores booleanos


function retorna(){
    return true;
}

