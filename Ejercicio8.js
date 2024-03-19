function sumarRango(numeroInicial, numeroFinal){
    let suma =0;
    for(elemento=numeroInicial; elemento<=numeroFinal; elemento++){
        suma+=elemento;
    }
    return suma;
}
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0