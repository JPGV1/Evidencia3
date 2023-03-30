let numero = parseInt(prompt("Ingrese el número a analizar"))
let primo = numero==2 || numero == 3 || numero == 5 || numero == 7 || numero ==11 || numero == 13
switch (primo) {
    case true:
        console.log("Este numero es un numero primo");
        break;

    default:
        console.log("Este numero no es un numero primo");
        break;
}