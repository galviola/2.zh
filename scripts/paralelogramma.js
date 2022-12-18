var magasság = parseInt(prompt("Add meg a paralelogramma magasságát centiméterben!"));
var szélesség = parseInt(prompt("Add meg a paralelogramma szélességét centiméterben!"));
 
var terület = (magasság * szélesség);
 
document.write("<br>");
document.write("<h2 style='color:#000000; text-align:left; margin-left:50px'>A kommON arculatában használt paralelogramma területe</h2>");
document.write("<h3 style='color:#000000; font-size:20; margin-left:50px'>A paralelogramma magassága: " + magasság + "</h3>");
document.write("<h3 style='color:#000000; font-size:20; margin-left:50px'>A paralelogramma szélessége: " + szélesség + "</h3><br>");
document.write("<h3 style='color:#000000; font-size:20; margin-left:50px; margin-bottom:50px'> A paralelogramma területe: " + terület + "</h3>");