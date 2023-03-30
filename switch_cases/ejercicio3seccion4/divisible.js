let numero = parseInt(prompt("Ingrese el número a analizar"))
let divisible = numero % 5 == 0
switch (divisible) {
    case true:
        console.log("El número si es divisible por 5")
        break;

    default:
        console.log("El numero no es divisible por 5");
        break;
}