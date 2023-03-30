let ángulo1 = parseFloat(prompt("Ingrese el primer ángulo"))
let ángulo2 = parseFloat(prompt("Ingrese el segundo ángulo"))
let ángulo3 = parseFloat(prompt("Ingrese el tercer ángulo"))
let triángulo = ángulo1 + ángulo2 + ángulo3 == 180
switch (triángulo) {
    case true:
        console.log("Estos ángulos si corresponden a un triángulo");
        break;

    default:
        console.log("Estos ángulos no corresponden a un triángulo");
        break;
}