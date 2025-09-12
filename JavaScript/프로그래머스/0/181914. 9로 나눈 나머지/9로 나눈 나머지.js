function solution(number) {
    var answer = 0;
    return [...number].reduce((a, c) => a +=Number(c), 0) % 9;
}