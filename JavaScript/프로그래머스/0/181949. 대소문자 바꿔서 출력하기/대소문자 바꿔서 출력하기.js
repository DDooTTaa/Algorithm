const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const a = [...str].map(x => {
        if(x.charCodeAt() < 97) {
            return x.toLowerCase();
        } else {
            return x.toUpperCase();
        }
    }).join('')
        console.log(a)
});