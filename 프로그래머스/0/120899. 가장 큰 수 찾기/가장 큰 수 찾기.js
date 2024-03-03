function solution(array) {
    var a = Math.max(...array);
    return [a, array.indexOf(a)];
}