function distancia(cadena1, cadena2) {
    let distancia = Math.abs(cadena1.length - cadena2.length);
  
    for (let i = 0; i < Math.min(cadena1.length, cadena2.length); i++) {
      if (cadena1[i] !== cadena2[i]) {
        distancia++;
      }
    }
  
    return distancia;
  }
  
  console.log(distancia("hola", "hola")); // 0
  console.log(distancia("sol", "tol")); // 1
  console.log(distancia("carro", "correr")); // 3
  