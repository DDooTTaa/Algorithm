function solution(a, b, n) {
    var answer = 0;
    let rest = n;
    while(rest >= a) {
        answer+= (Math.floor(rest / a) * b);
        rest = (Math.floor(rest / a) * b) + rest % a;
    }
    return answer;
}