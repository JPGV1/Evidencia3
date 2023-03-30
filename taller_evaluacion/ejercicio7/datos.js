let nombre = prompt("Ingrese su nombre para el registro en la app.")
let identificacion = prompt ("Ingrese su numero de identificacion")
let estados = prompt ("Elija que desea hacer, si desea visualizar digite num1, si desea editar digite num2")
switch (estados) {
    case "num1":
        console.log("Los datos registrados son:", nombre , identificacion)
        break;
    case "num2":
        nombre= prompt("Ingrese el nuevo nombre")
        identificacion= prompt ("Ingrese la nueva identificacion")
        console.log("Los nuevos datos son:", nombre , identificacion)
        break;
    default:
        console.log("Ingrese una opcion valida.")
        break;
}