function solution(k, score) {
    var answer = [];
    let stack = [];
    score.forEach((x, i) => {
        stack.push(x);
        stack.sort((a, b) => b - a);
        answer.push(stack[k - 1] ? stack[k - 1] : stack[stack.length - 1]);
    })
    return answer;
}