let N = prompt("Ingrese la cantidad de numeros (No mayor a 50)")

if(N>50){
    alert("Error. La cantidad de números es mayor a 50")
}
else{
    let num = ''

    for(let i=1;i<=N;i++){
        num += i 
        console.log(num)
    }
    
}

