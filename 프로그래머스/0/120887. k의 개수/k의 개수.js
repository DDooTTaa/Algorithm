function solution(i, j, k) {
    var answer = 0;
    for(let a = i; a <= j; a++) {
        var kk = String(a);
        [...kk].forEach(x => {
            if(x == String(k)) {
                answer++;
            }
        })
    }
    return answer;
}