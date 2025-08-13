function solution(numbers, n) {
    var answer = 0;
    numbers.forEach(x => {
        if(answer > n) {
            return;
        }
        answer+= x;
    })
    return answer;
}