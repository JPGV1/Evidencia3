// En una tienda de ropa se quiere dar a elegir entre tres outfits promocionados.
let outfit = prompt("Elija uno de los siguientes outfits: casual, elegante, deportivo")
let Error = !outfit== "casual"|| !outfit== "elegante" || !outfit== "deportivo"
switch (outfit) {
    case "casual":
        console.log("El outfit casual contiene : Una camisa de manga corta sin cuello, una sudadera acorde al color de la camisa y unos tennis que combinen al outfit.");
        break;
    case "elegante":
        console.log("El otufit elegante contiene: Camisa manga larga azul pastel, pantalon negro, correa negra, esmoquin negro y zapatos elegantes negros.");
        break;
    case "deportivo":
        console.log("El outfit deportivo contiene: Camisa deportiva negra, pantaloneta blanca y tennis blancos con negro.");
        break;
    default:
        break;
}        
switch (Error) {
    case true:
        console.log("El outfit ingresado no corresponde a ninguno de los promocionados.");
        break;
    default:
        break;
}
