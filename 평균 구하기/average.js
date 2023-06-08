/**
 * 평균 구하기
 * https://school.programmers.co.kr/learn/courses/30/lessons/12944
 * Lv.1
 * @param arr
 * @returns {number}
 */
function solution(arr) {
    return (arr.reduce((prev, now) => { return now += prev }, 0)) / arr.length ;
}