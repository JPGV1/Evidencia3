let numero = parseInt(prompt("Ingrese el número a analizar"))
let par = numero % 2 == 0 
switch (par) {
    case true:
        console.log("Este número es par.");
        break;
    default:
        console.log("Este número es impar.");
        break;
}