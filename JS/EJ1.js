let edad = parseInt(prompt("Ingrese su edad")) 

if(edad >= 18 && edad <= 75){
    console.log("Ya puede conducir")
}
else if(isNaN(edad)){
    console.log("La edad ingresada es errónea")
}
else if(edad < 18){
    console.log("Es menor de 18 años. No puede conducir")
}
else if(edad > 75){
    console.log("Edad avanzada. Ya no puede conducir")
}
