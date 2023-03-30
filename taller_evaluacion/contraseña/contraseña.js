let contraseña= prompt ("Ingrese la contraseña")
contraseñaInvalida= contraseña.length < 8 || contraseña.length > 15
contraseñaSinEspacio= !contraseña.includes (" ")
contraseñaValida= contraseña.length > 8 || contraseña.length < 15 && contraseña.includes (" ")
switch (true) {
    case contraseñaInvalida:
        console.log("La contraseña no cumple con los caracteres minimos o maximos.");
        break;
    case contraseñaSinEspacio:
       console.log("La contraseña debe contener almenos un espacio.");
        break;
    case contraseñaValida:
        console.log("La contraseña ingresada cumple con los requisitos planteados.");
        break;
    default:
        console.log("La contraseña no cumple con ningun requisito.");
        break;
}
