function solution(a, b) {
    const week = ['MON', 'TUE','WED','THU','FRI','SAT', 'SUN'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = b;
    month.forEach((x,idx) => {
        if((idx + 1) < a) {
            days += x;
        }
    })
    console.log(days);
    return week[(days + 3) % 7];
}