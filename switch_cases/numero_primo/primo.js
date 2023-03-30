let numero = parseInt(prompt("ingrese el numero a analizar"))
let primo = numero == 2 || numero == 3 || numero == 5 || numero == 7 || numero == 11 || numero == 13 
switch (primo){
    case true:
        console.log("este numero es un numero primo");
        break;

    default:
        console.log("este numero no es un numero primo");
        break;
}