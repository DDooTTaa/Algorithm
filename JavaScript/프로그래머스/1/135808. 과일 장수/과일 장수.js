function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    for(let i = 0; i < score.length - m + 1; i+=m) {
        answer+= score.slice(i, i+m)[m - 1];
    }
    return answer * m;
}