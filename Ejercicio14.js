function sumarArreglo(arreglo, posicionInicial, posicionFinal) {
    let suma = 0;

    for (let i = posicionInicial; i <= posicionFinal; i++) {
        suma += arreglo[i];
    }

    return suma;
}

// Ejemplo de uso:
console.log(sumarArreglo([1, 2, 3], 1, 2)); // Devolverá 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // Devolverá 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // Devolverá 7
