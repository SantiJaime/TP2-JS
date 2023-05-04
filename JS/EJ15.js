let texto = prompt("Ingrese su texto");
let c = 0

for (let i = 0; i < texto.length; i++) {
  if (
    texto.charAt(i) === "a" ||
    texto.charAt(i) === "e" ||
    texto.charAt(i) === "i" ||
    texto.charAt(i) === "o" ||
    texto.charAt(i) === "u"
  ) {
    c++
  }
}
console.log(`Hay ${c} vocales en el texto ingresado`)
 