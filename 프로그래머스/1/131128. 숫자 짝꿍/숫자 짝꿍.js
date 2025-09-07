function solution(X, Y) {
    const countX = Array(10).fill(0);
    const countY = Array(10).fill(0);

    for (let ch of X) countX[ch]++;
    for (let ch of Y) countY[ch]++;

    let result = '';
    for (let i = 9; i >= 0; i--) {
        result += String(i).repeat(Math.min(countX[i], countY[i]));
    }

    if (result === '') return "-1";
    if (result[0] === '0') return "0";
    return result;
}