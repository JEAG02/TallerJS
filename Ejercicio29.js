function numAsteriscos(arreglo) {
    return arreglo.reduce((contador, elemento) => contador + (elemento === '*' ? 1 : 0), 0);
  }
  
  console.log(numAsteriscos(['', '*', '', '*'])); // 2
  console.log(numAsteriscos(['*', '*', '*'])); // 3
  console.log(numAsteriscos([])); // 0
  