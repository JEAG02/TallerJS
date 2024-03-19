function capitalizar(texto) {
    if (texto.length === 0) {
        return "";
    }

    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Ejemplo de uso:
console.log(capitalizar("pedro"));        // Devolverá "Pedro"
console.log(capitalizar("hola mundo"));   // Devolverá "Hola mundo"
console.log(capitalizar(""));              // Devolverá ""
