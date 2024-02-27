function solution(box, n) {
    return box.map(x => Math.floor(x / n)).reduce((acc, cur) => acc * cur);
}