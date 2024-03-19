function transcribir(cadenaADN) {
    let complementoARN = "";

    for (let i = 0; i < cadenaADN.length; i++) {
        switch (cadenaADN[i]) {
            case 'G':
                complementoARN += 'C';
                break;
            case 'C':
                complementoARN += 'G';
                break;
            case 'T':
                complementoARN += 'A';
                break;
            case 'A':
                complementoARN += 'U';
                break;
            default:
                // Manejar otros caracteres si es necesario
                break;
        }
    }

    return complementoARN;
}

// Ejemplo de uso:
console.log(transcribir("ACGT"));        // Devolverá "UGCA"
console.log(transcribir("ACGTGGTCTTAA"));// Devolverá "UGCACCAGAAUU"
