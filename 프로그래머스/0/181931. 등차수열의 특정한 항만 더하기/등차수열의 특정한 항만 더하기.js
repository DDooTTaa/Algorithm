function solution(a, d, included) {
    var answer = [];
    included.forEach((x, i) => {
        var t = a;
        t += (d * i);
        if(x) {
            answer.push(t);
        }
    })
    return answer.reduce((a, c) => c+=a, 0);
}