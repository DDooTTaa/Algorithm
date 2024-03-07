function solution(n) {
    var list = [];
    for(let i = 1; i < 1001; i++) {
        list.push(i * i);
    }
    return list.includes(n) ? 1 : 2;
}