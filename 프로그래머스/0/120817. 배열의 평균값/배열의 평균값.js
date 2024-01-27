function solution(numbers) {
    return (numbers.reduce((arr, x) => x = x + arr)) / numbers.length;
}