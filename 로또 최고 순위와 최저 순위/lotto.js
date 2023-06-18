/**
 * 로또의 최고 순위와 최저 순위
 * Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/77484
 */
function solution(lottos, win_nums) {
    let score = 0;
    let zeroCount = 0;
    lottos.forEach(x => {
        if(x !== 0) {
            if(win_nums.includes(x)) {
                score++;
            }
        } else {
            zeroCount++;
        }
    })
    let max = score + zeroCount
    return [max !== 0 ? 7 - max : 6, score !== 0 ? 7 - score : 6];
}
