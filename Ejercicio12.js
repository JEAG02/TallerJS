function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 1;
    }

    let resultado = 1;

    for (let i = 0; i < arreglo.length; i++) {
        resultado *= arreglo[i];
    }

    return resultado;
}

// Ejemplo de uso:
console.log(multiplicarArreglo([4, 1, 2, 3])); // Devolverá 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // Devolverá 40320
console.log(multiplicarArreglo([])); // Devolverá 1
