function empiezanConA(arreglo) {
    return arreglo.filter(palabra => palabra.toLowerCase().startsWith("a"));
}

// Ejemplo de uso:
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])); // Devolverá ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"]));         // Devolverá []
console.log(empiezanConA([]));                                 // Devolverá []
