let texto = prompt("Ingrese su texto")

let array = texto.split("");

let invertido = array.reverse().join("");

console.log("El texto ingresado es " + texto)
console.log("El texto invertido es: " + invertido);