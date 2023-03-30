let angulo1 = parseFloat(prompt("ingrese la medida del angulo numero 1"))
let angulo2 = parseFloat(prompt("ingrese la medida del angulo numero 2"))
let angulo3 = parseFloat(prompt("ingrese la medida del angulo numero 3"))
if (angulo1 + angulo2 + angulo3 === 180){
    console.log("estos angulos si conforman un triangulo")
}else{
    console.log("estos angulos no conforman un triangulo")
}