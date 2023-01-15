var conteo=0;
function conteoDeCartas(carta){
var decision;
switch(carta){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        conteo++;
        break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
        conteo--;
        break;

    }
    if(conteo>0){
        decision="Apostar";
    }
    else{
        decision="Esperar";

    }
    return conteo+ " "+ decision;
}

console.log (conteoDeCartas(2));
console.log (conteoDeCartas(3));
console.log (conteoDeCartas(7));
console.log (conteoDeCartas("K"));
console.log (conteoDeCartas("A"));
