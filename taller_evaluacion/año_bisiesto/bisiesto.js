let año = parseInt (prompt("Ingrese el año a evaluar"))
let añoBisiesto = año % 4 == 0 && año %100 !=0 ||  año % 400 == 0
switch (true){
    case añoBisiesto:
        console.log("El año ingresado si es bisiesto.");
        break;
    default:
        console.log("El año ingresado no es bisiesto.");
        break;
}