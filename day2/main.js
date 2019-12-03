var fs = require("fs");
var input = fs.readFileSync("input", "utf8");
const intcodes = input.split(",").map(Number);
function part1(arr) {
    let ind = 0;
    let opCode = arr[ind];
    while (opCode != 99) {
        let result;
        if (opCode == 1) {
            result = arr[arr[ind + 1]] + arr[arr[ind + 2]];
        }
        else if (opCode == 2) {
            result = arr[arr[ind + 1]] * arr[arr[ind + 2]];
        }
        else if (opCode == 99) {
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
console.log(part1(intcodes)[0]);

//part 2
function part2 (arr) {
    let ind = 0;
    let opcode = arr[ind];
    while (opcode != 99) {
        let result;
        if(opcode == 1) {
            result = arr[arr[ind + 1]] + arr[arr[ind + 2]];
        }
        else if(opcode ==2) {
            result = arr[arr[ind + 1]] * arr[arr[ind + 2]];
        }
        else if(opcode == 99) {
            return arr;    
        }
        arr[arr[ind + 3]] = result;
        ind += 4;
        opcode = arr[ind];
    }
    return arr;
}
let cleanInput = input.split(',').map(s => Number.parseInt(s));

let n, v = 0;
for (n = 0; n < 100; n++) {
    for (v = 0; v < 100; v++) {
        let cleanInputx2 = cleanInput.slice();
        cleanInputx2[1] = n;
        cleanInputx2[2] = v;
        if (part2(cleanInputx2)[0] == 19690720) {
          console.log(100 * n + v);
        }
    }
}
