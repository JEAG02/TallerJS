function min(arreglo) {
    if (arreglo.length === 0) {
        return undefined; // Devolver undefined si el arreglo está vacío
    }

    let minimo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < minimo) {
            minimo = arreglo[i];
        }
    }

    return minimo;
}

// Ejemplo de uso:
console.log(min([3, 9, 6]));          // Devolverá 3
console.log(min([67, 35, 54, 26]));   // Devolverá 26
console.log(min([5, 9, 2, 4, 5, 7])); // Devolverá 2
