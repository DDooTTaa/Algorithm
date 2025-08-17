function solution(s) {
        var answer = [];
    const alphabet = { 'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight' : '8', 'nine' : '9'};
    let temp = '';
    s.split('').forEach(x => {
        temp += x;
        if(alphabet[temp]) {
            answer.push(alphabet[temp]);
            temp = '';
        } else if(!isNaN(Number(temp))) {
            answer.push(temp);
            temp = '';            
        }
    })
    return Number(answer.join(''));
}