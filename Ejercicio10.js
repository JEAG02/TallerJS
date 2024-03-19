function numeroDeCaracteres(texto, caracter) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }

    return contador;
}

// Ejemplo de uso:
console.log(numeroDeCaracteres("Hola Mundo", "o")); // Devolverá 2
console.log(numeroDeCaracteres("MMMMM", "m"));      // Devolverá 0
console.log(numeroDeCaracteres("eeee", "e"));       // Devolverá 4
