const altura = 5;
  for (let i = altura; i >= 1; i--) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      document.write("*");
    }
    document.write("<br>");
  }