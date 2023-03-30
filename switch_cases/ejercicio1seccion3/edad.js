let edad= parseInt(prompt("Ingrese su edad"))
let mayor = edad>=18;
switch (mayor) {
    case true:
        console.log("Usted es mayor de edad") 
        break;
    default:
        console.log("Usted es menor de edad")
        break;
}