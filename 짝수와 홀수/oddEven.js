/**
 * Lv1 짝수와 홀수
 */
function solution(num) {
    var answer = (Math.abs(num) % 2 === 1 && num !== 0) ? "Odd" : "Even";
    return answer;
}