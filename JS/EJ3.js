let concatenados = ""
    do {
        let texto = prompt("Ingrese su texto")
        if(concatenados === ""){
            concatenados += texto
        }
        else{
            concatenados = concatenados + "-" + texto
        }
    } while (confirm("¿Desea ingresar más texto?"));

    document.write(concatenados)