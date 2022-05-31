var fs = require('fs');
var input = fs.readFileSync('/dev/stdin')

let result = 0

for(let i = 1; i <= input; i++){
    result += i
}

console.log(result)