var fs = require("fs");
var input = fs.readFileSync("input", "utf8");
const intcodes = input.split(",").map(Number);
function processInstructions (arr) {
    let ind = 0;
    let opCode = arr[ind];
    while (opCode != 99) {
        let result;
        if(opCode ==1) {
            result = arr[arr[ind + 1]] + arr[arr[ind + 2]];
        }
        else if(opCode ==2) {
            result = arr[arr[ind + 1]] * arr[arr[ind + 2]];
        }            
        else if(opCode == 99) {
            return arr;
        }
        arr[arr[ind + 3]] = result;
        ind += 4;
        opCode = arr[ind];
    }
    return arr;
}
intcodes[1] = 12; //replace position 1 with the value 12 
intcodes[2] = 2; //replace position 2 with the value 2
console.log(processInstructions(intcodes)[0]);

//part 2
