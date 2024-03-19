const espacio = 8;
const espacio2 = 16;
  for (let i = 0; i < espacio; i++) {
    for (let j = 0; j < espacio2; j++) {
      if ((i + j) % 2 === 0) {
        document.write("*");
      } else {
        document.write("&nbsp;");
      }
    }
    document.write("<br>");
  }