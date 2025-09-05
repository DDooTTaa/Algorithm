function solution(binomial) {
    var answer = binomial.split(' ');
    if(answer[1] == '+') {
    return Number(answer[0]) + Number(answer[2]);        
    } else if (answer[1] == '-') {
    return Number(answer[0]) - Number(answer[2]);                
    } else {
    return Number(answer[0]) * Number(answer[2]);                        
    }
}