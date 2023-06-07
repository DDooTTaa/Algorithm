/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * Lv.2
 * @param n
 * @returns {number}
 */

function solution(n) {
    let count = 0;
    var answer = 0;
    let pos = n.toString(2).indexOf('1');
    while (pos !== -1) {
        count++;
        pos = n.toString(2).indexOf('1', pos + 1);
    }
    let numCount = 0;
    let position;
    for(let i = n + 1; numCount !== count; i++) {
        position = i.toString(2).indexOf('1');
        numCount = 0;
        while(position !== -1) {
            numCount++;
            position = i.toString(2).indexOf('1', position + 1);
        }
        if(numCount === count) {
            answer = i;
            break;
        }
    }
    return answer;
}