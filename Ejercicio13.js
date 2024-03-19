function removerCeros(arreglo) {
    // Utilizar el método filter para crear un nuevo arreglo sin ceros
    return arreglo.filter(numero => numero !== 0);
}

// Ejemplo de uso:
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // Devolverá [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // Devolverá [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // Devolverá []
