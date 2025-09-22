function solution(arr, n) {
    const isEven = arr.length % 2 == 0;
    return arr.map((x, i) => isEven ? (i % 2 == 0 ? x : (x + n)) : (i % 2 == 0 ? (x + n) : x));
}