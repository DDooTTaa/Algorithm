/**
 * Lv1 짝수와 홀수
 */
function solution(num) {
    return (Math.abs(num) % 2 === 1 && num !== 0) ? "Odd" : "Even";
}

module.exports = {
    solution
}