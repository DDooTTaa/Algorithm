/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * Lv.2
 * 커플딜리트란 파일명이 몹시 맘에 든다
 */


/**
 * 재귀함수를 이용한 풀이(동작 안하는 이유를 못 찾아봄)
 * @param s
 * @returns {number}
 */
function solution(s)
{
    let res = "";
    let con = true;
    let du = true;
    for(let i=0; i < s.length; i++) {
        if(s[i] !== s[i + 1]) {
            if(con) {
                res += s[i];
            } else {
                con = true;
                du = false;
            }
        } else {
            con = false;
        }
    }
    if(du) {
        return res === "" ? 1 : 0;
    } else {
        return solution(res);
    }
}

/**
 * stack 을 이용한 풀이
 * @param s
 * @returns {number}
 */
function solution(s){
    var arr = [];
    for(var i=0; i<s.length; i++){
        if(arr[arr.length-1] != s[i]){
            arr.push(s[i]);
        }else{
            arr.pop();
        }
    }
    return (arr.length>0) ? 0:1;
}