function solution(names) {
    var answer = [];
    names.forEach((x, i) => { if(i % 5 === 0) answer.push(x)});
    return answer;
}