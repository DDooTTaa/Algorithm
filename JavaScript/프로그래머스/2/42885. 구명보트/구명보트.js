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