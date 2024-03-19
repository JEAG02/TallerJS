function duplicar(arreglo) {
    return arreglo.map(numero => numero * 2);
}

// Ejemplo de uso:
console.log(duplicar([1, 2, 3])); // Devolverá [2, 4, 6]
console.log(duplicar([]));        // Devolverá []
