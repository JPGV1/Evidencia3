let estadoCivil = prompt("Ingrese soltero o casado")
let casado = estadoCivil == "casado"
switch (casado){
    case true:
        console.log("Muy bien, usted esta casado");
        break;
    default:
        console.log("Disfrute su solteria");
        break;
}