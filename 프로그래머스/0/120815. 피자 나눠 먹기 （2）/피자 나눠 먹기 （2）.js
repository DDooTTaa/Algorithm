function getGcd(a, b) {
    if(b === 0) return a;
    return getGcd(b, a % b);
}

function solution(n) {
    return n / getGcd(n, 6)
}