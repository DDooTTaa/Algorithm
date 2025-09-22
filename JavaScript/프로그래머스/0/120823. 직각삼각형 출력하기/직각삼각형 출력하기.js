const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(i = 0; i < Number(input[0]); i++) {
        var string = "*";
        for(j = 0; j < i; j++) {
            string = string + "*" ;
        }
        console.log(string);
    }
});