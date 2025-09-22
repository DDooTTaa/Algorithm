function solution(n) {
    var answer = 0;
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}