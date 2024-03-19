function contarRango (numero1, numero2){
    let cont = -1;
    for (elemento=numero1; elemento<numero2; elemento++){
        cont++;
    }
    return cont;
}
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0