let suma = 0

do {
    let num = parseFloat(prompt("Ingrese un número"))
    if(isNaN(num)){
        console.log("Error. El dato ingresado no es un número")
    }
    else{
        suma += num
    }
} while (confirm("¿Desea seguir ingresando más números?"));

console.log(suma)