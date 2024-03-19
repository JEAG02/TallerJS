function password(texto) {
    // Reemplazar mayúsculas por minúsculas
    let resultado = texto.toLowerCase();

    // Eliminar espacios en blanco
    resultado = resultado.replace(/\s/g, '');

    // Reemplazar caracteres específicos
    resultado = resultado.replace(/a/g, '4');
    resultado = resultado.replace(/e/g, '3');
    resultado = resultado.replace(/i/g, '1');
    resultado = resultado.replace(/o/g, '0');

    return resultado;
}

// Ejemplo de uso:
console.log(password("hola"));                    // Devolverá "h0l4"
console.log(password("esta es una prueba"));       // Devolverá "3st43sun4pru3b4"
console.log(password(""));                         // Devolverá ""
