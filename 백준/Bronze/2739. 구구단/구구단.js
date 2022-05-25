const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const num = Number(inputData[0])

for(let i = 1; i < 10; i++){
    let multiply = num * i
    
    console.log(`${num} * ${i} = ${multiply}`)
}