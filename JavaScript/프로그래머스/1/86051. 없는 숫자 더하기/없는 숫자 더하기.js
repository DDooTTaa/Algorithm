function solution(numbers) {
    var answer = -1;
    const c =  numbers.reduce((acc, cuu) => {
        return acc + cuu;
    }, 0);
    return 45 - c;
}