function solution(numbers, num1, num2) {
    var answer = [];
    numbers.forEach((x, i) => {
        if(num1 <= i && num2 >= i) {
            answer.push(x);
        }
    })
    return answer;
}