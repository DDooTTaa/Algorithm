/**
 * 구명보트
 * LV.2
 * 오름차순을 이용한 풀이, 하지만, 작은 사람들부터 먼저 태웠을 뿐 최적의 해가 아니다.
 * 가장 낮은 몸무게와 큰 사람을 같이 태우는 방법으로 해야 한다.
 * 문제에서 최대 2명밖에 탈 수 없다는 사실을 간과했다.
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 */
function solution(people, limit) {
    var answer = 1;
    people.sort((a, b) => a - b);
    let rest = 0;
    for(let i = 0; i < people.length; i++) {
        rest = rest + people[i];
        if(rest > limit) {
            answer++;
            rest = 0;
            i--;
        } else if(rest === limit) {
            answer++;
            rest = 0;
        }
    }
    return answer;
}

/**
 * 올바른 풀이
 */
function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    while(left < right) {
        if(people[left] + people[right] > limit) {
            left++;
        } else {
            left++;
            right--;
        }
        answer++;
    }
    if(left === right) answer++;
    return answer;
}