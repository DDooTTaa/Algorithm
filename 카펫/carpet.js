/**
 * 카펫
 * https://school.programmers.co.kr/learn/courses/30/lessons/42842
 * Lv.2
 */

function solution(brown, yellow) {
    for(let h = 3; h <= brown; h++) {
        if((brown + yellow) % h === 0) {
            let w = (brown + yellow) / h;
            //테두리 빼고 곱한 게 노란 카펫의 수일 경우 출력
            if( (h - 2) * (w - 2) === yellow) {
                return [w, h];
            }
        }
    }
}


/**
 * 다른 사람의 풀이
 * 근의 공식
 * 이건 도대체 어떻게 생각하는거냐
 */
function solution(brown, yellow) {
    const x = (brown - 12) * 0.5;
    const y = yellow - brown + 8;
    const i = ( 8 + x + Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    const j = ( 8 + x - Math.sqrt( Math.pow(x, 2) - (4 * y) ) ) * 0.5;
    return [i, j];
}