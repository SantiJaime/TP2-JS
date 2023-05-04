do {
    let num = parseInt(prompt("Ingrese su DNI (Entre 0 y 99999999"))
    if(num < 0 || num > 99999999){
        console.log("Error. Debe ingresar un número válido")
    }
    else if(isNaN(num)){
        alert("Error. El dato ingresado no es un número")
    }
    else{
        let div = num % 23
        console.log("El resto de la división es " + div)
        switch(true){
            case div === 0:
                console.log("A su DNI le corresponde la letra T")
                break;
            case div === 1:
                console.log("A su DNI le corresponde la letra R")
                break;
            case div === 2:
                console.log("A su DNI le corresponde la letra W")
                break;
            case div === 3:
                console.log("A su DNI le corresponde la letra A")
                break;
            case div === 4:
                console.log("A su DNI le corresponde la letra G")
                break;
            case div === 5:
                console.log("A su DNI le corresponde la letra M")
                break;
            case div === 6:
                console.log("A su DNI le corresponde la letra Y")
                break;
            case div === 7:
                console.log("A su DNI le corresponde la letra F")
                break;
            case div === 8:
                console.log("A su DNI le corresponde la letra P")
                break;
            case div === 9:
                console.log("A su DNI le corresponde la letra D")
                break;
            case div === 10:
                console.log("A su DNI le corresponde la letra X")
                break;
            case div === 11:
                console.log("A su DNI le corresponde la letra B")
                break;
            case div === 12:
                console.log("A su DNI le corresponde la letra N")
                break;
            case div === 13:
                console.log("A su DNI le corresponde la letra J")
                break;
            case div === 14:
                console.log("A su DNI le corresponde la letra Z")
                break;
            case div === 15:
                console.log("A su DNI le corresponde la letra S")
                break;
            case div === 16:
                console.log("A su DNI le corresponde la letra Q")
                break;
            case div === 17:
                console.log("A su DNI le corresponde la letra V")
                break;
            case div === 18:
                console.log("A su DNI le corresponde la letra H")
                break;
            case div === 19:
                console.log("A su DNI le corresponde la letra L")
                break;
            case div === 20:
                console.log("A su DNI le corresponde la letra C")
                break;
            case div === 21:
                console.log("A su DNI le corresponde la letra K")
                break;
            case div === 22:
                console.log("A su DNI le corresponde la letra E")
                break;
        }
    }
} while (confirm("¿Desea ingresar otro DNI?"));

