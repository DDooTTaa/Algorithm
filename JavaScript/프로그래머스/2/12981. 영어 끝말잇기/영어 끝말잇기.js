function solution(n, words) {
    const stack = [];
    let num;
    words.forEach((x, idx) => {
        if((words[idx + 1] ? words[idx + 1][0] : x[x.length - 1]) !== x[x.length - 1]) {
            num = num < idx + 2 ? num : idx + 2;
        } 
        if(stack.includes(x)) {
            num = num < idx + 1 ? num : idx + 1;
        } else {
            stack.push(x);
        }
    })
    return num ? [num % n === 0 ? n : num % n, Math.ceil(num / n)] : [0, 0];
}