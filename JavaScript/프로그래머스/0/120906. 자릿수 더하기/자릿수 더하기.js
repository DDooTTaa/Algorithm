function solution(n) {
    return [...String(n)].reduce((a, b) => a + Number(b), 0);
}