/**
 * 이중우선순위큐
 * Lv.3
 * https://school.programmers.co.kr/learn/courses/30/lessons/42628
 */
function solution(operations) {
    var answer = [];
    operations.forEach(x => {
        if(x[0] === 'I') {
            answer.push(parseInt(x.split('I ')[1]));
        } else {
            answer.sort((a, b) => a - b);
            if(x[2] === '-') {
                answer.shift();
            } else {
                answer.pop();
            }
        }
    })
    answer.sort((a, b) => a - b);
    return answer.length === 0 ? [0, 0] : [answer[answer.length - 1], answer[0]];
}