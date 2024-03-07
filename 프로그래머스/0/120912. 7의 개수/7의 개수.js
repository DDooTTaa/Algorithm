function solution(array) {
    var n = 0;
    array.forEach(x => [...String(x)].forEach(y => {
        y === "7" ? n++ : null;
    }))
    return n;
}