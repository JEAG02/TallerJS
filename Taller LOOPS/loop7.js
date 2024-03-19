 const altura = 5;
 for (let i = 1; i <= altura; i++) {
   for (let j = 0; j < altura - i; j++) {
     document.write("&nbsp;");
   }
   for (let k = 0; k < 2 * i - 1; k++) {
     document.write("*");
   }
   document.write("<br>");
 }
 for (let i = altura - 1; i >= 1; i--) {
   for (let j = 0; j < altura - i; j++) {
     document.write("&nbsp;");
   }
   for (let k = 0; k < 2 * i - 1; k++) {
     document.write("*");
   }
   document.write("<br>");
 }