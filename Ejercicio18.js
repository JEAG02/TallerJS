function max(arreglo) {
    if (arreglo.length === 0) {
        return undefined; // Devolver undefined si el arreglo está vacío
    }

    let maximo = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }

    return maximo;
}

// Ejemplo de uso:
console.log(max([3, 9, 6]));          // Devolverá 9
console.log(max([67, 35, 54, 26]));   // Devolverá 67
console.log(max([5, 9, 2, 4, 5, 7])); // Devolverá 9
