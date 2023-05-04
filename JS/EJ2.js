let nota = parseInt(prompt("Ingrese su nota")) 

if(nota >= 0 && nota <= 2){
    alert(`Su nota es ${nota}. Muy deficiente`)
}
else if(nota >= 3 && nota <= 4){
    alert(`Su nota es ${nota}. Insuficiente`)
}
else if(nota >= 5 && nota <= 6){
    alert(`Su nota es ${nota}. Suficiente`)
}
else if(nota === 7){
    alert(`Su nota es ${nota}. Bien`)
}
else if(nota >= 8 && nota <= 9){
    alert(`Su nota es ${nota}. Notable`)
}
else if(nota === 10){
    alert(`Su nota es ${nota}. Sobresaliente`)
}
else if(nota < 0 || nota > 10){
    alert("La nota ingresada es errónea")
}
else if(isNaN(nota)){
    alert("Número inválido. Introduce uno válido")
}