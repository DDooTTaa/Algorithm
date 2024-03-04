function solution(array, n) {
    var stack = [];
    array.sort((a, b) => a - b);
    array.forEach((x, i) => {
        stack.push(Math.abs(n - x));
    })
    var m = Math.min(...stack);
    return  array[stack.indexOf(m)];
}