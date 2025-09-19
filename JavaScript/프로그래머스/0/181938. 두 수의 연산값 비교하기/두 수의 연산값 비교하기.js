function solution(a, b) {
    var answer = 0;
    return Number(String(a) + String(b)) >= (a * 2 * b) ? (Number(String(a) + String(b))) : a * 2 * b;
}