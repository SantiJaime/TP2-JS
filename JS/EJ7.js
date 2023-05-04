let N = prompt("Ingrese la cantidad de números (No mayor a 50)")

if(N>50){
    alert("Error. La cantidad de números es mayor a 50")
}
else{
    for(let i=N;i>=1;i--){
        let num = ''
        for(let j=1;j<=i;j++){
            num += i
        }
        console.log(num)
    }
}


