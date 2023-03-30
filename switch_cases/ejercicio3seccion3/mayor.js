let numero1 = parseInt(prompt("Ingrese el primer numero"))
let numero2 = parseInt(prompt("Ingrese el segundo numero"))
let igual = numero1 == numero2
let menor = numero1 < numero2
let mayor = numero1 > numero2 

switch (true) {
    case mayor:
        console.log("El primer numero es mayor.");
        break;

    case menor:
        console.log("El segundo numero es mayor.");
        break;

    case igual:
        console.log("Ambos numeros son iguales.")
        break;

    default:
        console.log("Cifras invalidas.");    
        break;    
}


