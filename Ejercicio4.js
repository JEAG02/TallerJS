function imprimirArreglo (arreglo){
    for (let elemento=0; elemento < arreglo.length; elemento++){
        console.log(arreglo[elemento]);
    }
}
const arregloFinal = [1, "Hola", 2, "Mundo"];
imprimirArreglo(arregloFinal);
// 1
// Hola
// 2
// Mundo