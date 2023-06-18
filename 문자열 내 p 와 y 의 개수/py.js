/**
 * 문자열 내 p 와 y 의 개수
 * Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/12916
 */
function solution(s){
    let score = 0;
    s.split('').forEach(x => {
        if(x === 'p' || x === 'P') {
            score++;
        } else if (x === 'y' || x === 'Y') {
            score--;
        }
    })
    return score === 0;
}