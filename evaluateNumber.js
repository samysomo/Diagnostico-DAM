function evaluateNumber(num){
    if (num > 0){
        return "El numero es mayor a cero"
    } else if (num < 0){
        return "El numero es menor a cero"
    } else{
        return "El numero es cero"
    }
}

console.log(evaluateNumber(-4))