function solution(schedules, timelogs, startday) {
    const n = schedules.length;
    let answer = n;

        // HHMM → minutes 변환 함수
    const toMinutes = (time) => {
        const h = Math.floor(time / 100);
        const m = time % 100;
        return h * 60 + m;
    };

const limits = schedules.map(t => toMinutes(t) + 10);
    
    // timelogs.forEach((x, i) => {
    //     let t = true;
    //     x.forEach((y, j) => {
    //     if(plusSchedules[i] < y && dayMap[(startday - 1 + j) % 7] && t) {
    //         answer--;
    //         t = false;
    //     }            
    //     })
    // })

    const dayMap = [true, true, true, true, true, false, false]; // 월~일

    for (let i = 0; i < n; i++) {
        let ok = true;
        for (let j = 0; j < 7; j++) {
            const dayIndex = (startday - 1 + j) % 7;
            if (!dayMap[dayIndex]) continue; // 주말은 패스
            const arrive = toMinutes(timelogs[i][j]);
            if (arrive > limits[i]) {
                ok = false;
                break;
            }
        }
        if (!ok) answer--;
    }
    return answer;
}