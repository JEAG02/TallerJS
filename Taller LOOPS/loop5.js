const altura = 5;
for (let i = 1; i <= altura; i++) {
  const espacios = altura - i;
  for (let j = 0; j < espacios; j++) {
    document.write("&nbsp;");
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br>");
}