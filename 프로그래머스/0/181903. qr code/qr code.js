function solution(q, r, code) {
    var answer = '';
    [...code].forEach((x, i) => {
        if(i % q == r) {
            answer+=x;
        }
    })
    return answer;
}