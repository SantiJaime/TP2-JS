let texto = prompt("Ingrese su texto");
let vocal = ''

for(let i=0;i<texto.length;i++){
    if (
        texto.charAt(i) === "a" ||
        texto.charAt(i) === "e" ||
        texto.charAt(i) === "i" ||
        texto.charAt(i) === "o" ||
        texto.charAt(i) === "u"
      ) {
        vocal = texto.charAt(i)
        pos = i
        break;
      }
}
console.log(`La frase ingresada es "${texto}"`)
console.log(`La vocal "${vocal}" está en la posición ${pos+1}`)

