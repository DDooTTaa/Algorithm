function solution(n) {
    let answer, x = 0, y = 1;
    for(let i = 2 ; i <= n + 1 ; i++) {
        answer = x + y % 1234567;
        x = y;
        y = answer;
    }
    return answer % 1234567;
}