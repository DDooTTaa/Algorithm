// 포기한 문제, 다음에 다시 풀 것
function solution(s) {
    let count = 0;      // 분리된 문자열 개수
    let same = 0;       // 기준 문자와 같은 글자 개수
    let diff = 0;       // 다른 글자 개수
    let target = "";    // 기준 문자

    for (let i = 0; i < s.length; i++) {
        if (same === 0 && diff === 0) {
            // 새로운 구간 시작
            target = s[i];
        }

        if (s[i] === target) {
            same++;
        } else {
            diff++;
        }

        if (same === diff) {
            count++;
            same = 0;
            diff = 0;
        }
    }

    // 끝까지 갔는데 same!=diff인 경우 마지막 조각 처리
    if (same !== 0 || diff !== 0) {
        count++;
    }

    return count;
}