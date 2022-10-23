function solution(s) {
    const word = s.split(" ");
    const min = Math.min(...word);
    const max = Math.max(...word);
    return min + ' ' + max;
}