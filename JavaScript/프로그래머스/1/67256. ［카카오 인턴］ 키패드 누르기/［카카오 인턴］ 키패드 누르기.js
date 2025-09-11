function solution(numbers, hand) {
    let answer = '';

    // 키패드 좌표 매핑
    const pos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    // 손 위치 초기값
    let left = pos['*'];
    let right = pos['#'];

    // 맨해튼 거리 계산 함수
    const dist = (p1, p2) => 
        Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);

    for (let x of numbers) {
        if (x === 1 || x === 4 || x === 7) {
            answer += 'L';
            left = pos[x];
        } else if (x === 3 || x === 6 || x === 9) {
            answer += 'R';
            right = pos[x];
        } else { // 2,5,8,0
            let target = pos[x];
            let leftDist = dist(left, target);
            let rightDist = dist(right, target);

            if (leftDist < rightDist) {
                answer += 'L';
                left = target;
            } else if (rightDist < leftDist) {
                answer += 'R';
                right = target;
            } else { // 같을 때는 hand 기준
                if (hand === 'right') {
                    answer += 'R';
                    right = target;
                } else {
                    answer += 'L';
                    left = target;
                }
            }
        }
    }

    return answer;
}