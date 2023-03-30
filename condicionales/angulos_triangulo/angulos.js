let angulo1 = parseInt(prompt("ingrese la medida del angulo 1"))
let angulo2 = parseInt(prompt("ingrese la medida del angulo 2"))
let angulo3 = parseInt(prompt("ingrese la medida del angulo 3"))
if(angulo1 + angulo2 + angulo3 == 180){
    console.log("los tres angulos corresponden a un triangulo")
}
if(angulo1 + angulo2 + angulo3 < 180){
    console.log("los tres angulos no corresponden a un triangulo debido a que su suma no es igual a 180°")
}
if(angulo1 + angulo2 + angulo3 > 180){
    console.log("los tres angulos no corresponden a un triangulo debido a que su suma no es igual a 180°")
}