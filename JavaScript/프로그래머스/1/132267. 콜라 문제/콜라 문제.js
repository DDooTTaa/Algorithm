function solution(a, b, n) {
    var answer = 0;
    const stack = [];
    let rest = n;
    let tt = 0;
    while(rest >= a) {
        answer+= (Math.floor(rest / a) * b);
        rest = (Math.floor(rest / a) * b) + rest % a;
    }
    return answer;
}