function sumarArreglo(arreglo) {
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }

    return suma;
}

// Ejemplo de uso:
console.log(sumarArreglo([3, 1, 2])); // Devolverá 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Devolverá 55
console.log(sumarArreglo([])); // Devolverá 0