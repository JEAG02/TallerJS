function capitalizar(texto) {
    if (texto.length === 0) {
        return "";
    }

    return texto
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Ejemplo de uso:
console.log(capitalizar("hola mundo"));        // Devolverá "Hola Mundo"
console.log(capitalizar("make it real"));      // Devolverá "Make It Real"
console.log(capitalizar(""));                  // Devolverá ""
