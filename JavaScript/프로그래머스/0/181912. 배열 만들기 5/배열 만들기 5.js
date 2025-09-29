function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(x => {
        answer.push(Number(x.slice(s, l + s)));
    })
    return answer.filter(x => x > k);
}