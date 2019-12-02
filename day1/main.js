var fs = require('fs');
var input = fs.readFileSync("input", "utf8");
input = input.split("\n");
var cleanInput = input.map(function (x) {
    return parseFloat(x, 10);
});
//part 1
function calcFuel(mass) {
  let fuel = Math.floor(mass / 3) - 2;
  return fuel;
}
//part 2
function calcFuel2(mass) {
    let totalFuel = 0;
    let currentFuel = calcFuel(mass);
    while (currentFuel >= 0) {
        totalFuel += currentFuel;
        currentFuel = calcFuel(currentFuel);
    }
    return totalFuel;
}
let total1 = 0, total2 = 0;
//loop through input
for (let i = 0; i < cleanInput.length; i++) {
    let mass = parseFloat(cleanInput[i]);
    total1 += calcFuel(mass);
    total2 += calcFuel2(mass);
}
//get answers
console.log("total1 ", total1, " total2 ", total2);





   
    
    
