function numAsteriscos(matriz) {
    return matriz.flat().reduce((contador, elemento) => contador + (elemento === '*' ? 1 : 0), 0);
  }
  
  console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ])); // 5
  