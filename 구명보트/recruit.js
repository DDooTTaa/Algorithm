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
    // 사람들을 몸무게가 낮은 순으로 정렬한다. (높은 순으로 해도 상관 없음)
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    // Left 와 Right 의 포커스를 옮겨가며 배의 수를 카운트한다.
    while(left < right) {
        if(people[left] + people[right] > limit) {
            left++;
        } else {
            left++;
            right--;
        }
        answer++;
    }
    // left 와 right 가 같을 경우(한 사람만 남을 경우 배가 한 척 더 필요하다.)
    if(left === right) answer++;
    return answer;
}