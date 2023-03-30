let opcion = parseInt (prompt("Elija entre el menù de almuerzo 1, el menù 2 o el menù 3, para ello digite el nùmero del menù que desea. En caso de no desear nada digite el nùmero 4."))  
switch (opcion) {
    case 1:
        console.log("Has seleccionado el menù de almuerzo 1 y contiene: Frijoles, Arroz, Chuleta de cerdo, Ensalada y jugo de mora.");
            break;
    case 2:
        console.log("Has seleccionado el menù de almuerzo 2 y contiene: Lentejas, Arroz, Chicharron, Ensalada y limonada.");
            break;
    case 3:
        console.log("Has seleccionado el menù de almuerzo 3 y contiene: Garbanzos, Arroz, Pollo, Ensalada y jugo de mango");
            break;
    case 4:
        console.log("Espero volver a verte... Cuando tengas hambre, ¡Nos vemos!");
            break;
    default:
        console.log("Elija un menù disponible.");
         break;
            }
console.log("En caso de cambiar de opiniòn por favor reiniciar el programa.");
    

