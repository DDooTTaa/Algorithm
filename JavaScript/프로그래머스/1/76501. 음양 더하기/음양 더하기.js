function solution(absolutes, signs) {
    return absolutes.reduce((acc, cuu, i) => acc + (cuu * (signs[i] ? 1 : -1)), 0);
}