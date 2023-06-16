/**
 * 체육복
 * Lv.1
 * https://school.programmers.co.kr/learn/courses/30/lessons/42862#
 * 이렇게 풀면 reseve 의 인덱스가 커질 때 lost 의 index 도 변해 완전탐색을 할 수 없게 된다.
 */
function solution(n, lost, reserve) {
    var answer = n;
    let left = 0;
    let right = reserve.length;
    reserve.sort((a, b) => a - b);
    lost.sort((a, b) => a - b);
    while(left < right) {
        if(reserve[left] - 1 === lost[left] || reserve[left] + 1 === lost[left]) {
            reserve.shift();
            lost.shift();
        } else {
            left++;
        }
    }
    return answer - lost.length;
}