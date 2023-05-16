function solution(targets) {
    var answer = 1;
    // 스타트 지점이 작은 기준으로 정렬한다
    targets.sort((s,e) => s[0] - e[0]);
    // 정렬된 미사일에 최종 지점을 기준으로 시작한다.
    let loc = targets[0][1];
    targets.forEach(mi => {
        // 시작 좌표가 지정된 좌표보다 작을 경우 중
        if(mi[0] < loc) {
            // 마지막 좌표가 지정된 좌표보다 작을 경우
            if (mi[1] < loc) {
                // 좌표를 재설정한다.
                loc = mi[1];
            }
            // 시작 좌표가 지정된 좌표보다 크거나 같을 경우에 카운트를 올린다
        }  else {
            loc = mi[1]
            answer++;
        }
    })
    return answer;
}