function solution(numbers, direction) {
    var a = numbers[0];
    var b = numbers[numbers.length - 1];
    if(direction === 'right') {
        numbers.pop();
        numbers.unshift(b);
    } else {
        numbers.shift();
        numbers.push(a);
    }
    return numbers;
}