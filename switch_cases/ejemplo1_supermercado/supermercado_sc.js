let producto = prompt("Ingrese el nombre del producto")
switch (producto) {
    case "crema":
        console.log("El producto paga IVA");
        break;
    case "vino":
        console.log("El producto paga IVA");
        break;
    case "arroz":
        console.log("El producto  no paga IVA");
        break;
    case "lentejas":
        console.log("El producto  no paga IVA");
        break;
    default:
        console.log("Ingrese un producto valido");
        break;
}