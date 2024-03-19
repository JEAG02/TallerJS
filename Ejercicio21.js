function pares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}

// Ejemplo de uso:
console.log(pares([1, 2, 3, 4, 5, 6])); // Devolverá [2, 4, 6]
console.log(pares([]));                 // Devolverá []
