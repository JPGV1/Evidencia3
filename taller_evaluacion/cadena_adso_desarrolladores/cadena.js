let cadena = prompt ("Ingrese la cadena de texto.")
cadenaAdso = cadena.includes ("ADSO") && !cadena.includes ("desarrolladores")
cadenaDesarrolladores = cadena.includes ("desarrolladores") && !cadena.includes ("ADSO")
cadenaAmbas = cadena.includes ("ADSO") && cadena.includes ("desarrolladores")
switch (true) {
    case cadenaAdso:
        console.log("Esta cadena de texto contiene la palabra: ADSO; pero no contiene la palabra: desarrolladores");
        break;
    case cadenaDesarrolladores:
        console.log("Esta cadena de texto contiene la palabra: desarrolladores; pero no contiene la palabra: ADSO");
        break;
    case cadenaAmbas:
        console.log("Esta cadena de texto contiene ambas palabras: tanto ADSO como desarrolladores");
        break;
    default:
        console.log("Esta cadena no contiene ninguna de las dos palabras requeridas");
        break;
}