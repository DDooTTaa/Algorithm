/**
 *  두 정수 사이의 합
 *  Lv.1
 *  https://school.programmers.co.kr/learn/courses/30/lessons/12912
 */
function solution(a, b) {
    var answer = 0;
    if(a > b) {
        for(let i = b; i <= a; i++) {
            answer+= i;
        }
    } else if (a < b) {
        for(let i = a; i <= b; i++) {
            answer+= i;
        }
    } else {
        answer = a;
    }
    return answer;
}

/**
 * 가우스를 이용한 풀이
 */
function adder(a, b){
    var result = 0
    //함수를 완성하세요
    return (a+b) * (Math.abs(a-b)+1) / 2;
}