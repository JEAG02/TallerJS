function terminanConS(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().endsWith("s"));
}

// Ejemplo de uso:
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])); // Devolverá ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"]));              // Devolverá []
console.log(terminanConS([]));                                      // Devolverá []
