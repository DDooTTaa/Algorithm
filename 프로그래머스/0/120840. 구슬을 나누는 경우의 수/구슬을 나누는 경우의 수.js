function fact(a) {
    var res = 1;
    for(let i = 1; i <= a; i++) {
        res*= i;
    }
    return res;
}
function solution(balls, share) {
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}