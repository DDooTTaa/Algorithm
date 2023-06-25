function solution(n) {
    var answer = 1;
    while(true) {
        answer++;
        if(n % answer === 1) {
            return answer;
        }
    }
}