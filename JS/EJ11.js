let nombre1 = prompt("Ingrese el primer nombre")
let edad1 = parseInt(prompt("Ingrese su edad")) 

let nombre2 = prompt("Ingrese el segundo nombre")
let edad2 = parseInt(prompt("Ingrese su edad")) 

let nombre3 = prompt("Ingrese el tercer nombre")
let edad3 = parseInt(prompt("Ingrese su edad")) 

let max = Math.max(edad1, edad2, edad3)

if(max === edad1){
    console.log(nombre1 + " es el mayor")
}
else if(max === edad2){
    console.log(nombre2 + " es el mayor")
}
else if(max === edad3){
    console.log(nombre3 + " es el mayor")
}