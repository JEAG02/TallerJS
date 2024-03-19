const altura = 5;
  for (let i = 1; i <= altura; i++) {
    for (let j = 1; j <= altura; j++) {
      if (j <= i) {
        document.write("*");
      } else {
        document.write("&nbsp;");
      }
    }
    document.write("<br>");
  }