function solution(num, k) {
    var answer = [...String(num)].indexOf(String(k)) + 1;
    return answer === 0 ? -1 : answer;
}