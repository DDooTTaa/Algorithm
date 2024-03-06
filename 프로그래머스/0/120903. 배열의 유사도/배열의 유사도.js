function solution(s1, s2) {
    var answer = 0;
    s1.forEach(x => {
        s2.forEach(y => {
            if(x === y) answer++;
        })
    });
    return answer;
}