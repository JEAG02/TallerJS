const espacio = 5;
for (let i = 0; i < espacio; i++) {
  for (let j = 0; j < espacio; j++) {
    if (i === 0 || i === espacio - 1 || j === 0 || j === espacio - 1) {
      document.write("*");
    } else {
      document.write("&nbsp;");
    }
  }
  document.write("<br>");
}