const filas = parseInt(prompt("Ingrese numero de filas"));
const columnas = parseInt(prompt("Ingrese numero de columnas"));
let resultado = filas * columnas;

document.write(`<table><tbody>`);
for (let i = 0; i < filas; i++) {
  document.write(`<tr>`);
  for (let j = 0; j < columnas; j++) {
    document.write(`<td>${resultado}</td>`);
    resultado--;
  }
  document.write(`</tr>`);
}
document.write(`</tbody> </table>`);
