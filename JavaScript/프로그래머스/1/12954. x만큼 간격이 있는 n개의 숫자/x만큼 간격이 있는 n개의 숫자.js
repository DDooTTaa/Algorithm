function solution(x, n) {
    var answer = [];
    let t = x;
    for(let i = 0; i < n; i++) {
        answer.push(t);
                t = t + x;
    }
    return answer;
}