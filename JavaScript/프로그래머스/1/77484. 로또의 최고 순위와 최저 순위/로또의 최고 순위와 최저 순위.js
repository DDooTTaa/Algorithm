function solution(lottos, win_nums) {
    let score = 0;
    let zeroCount = 0;
    lottos.forEach(x => {
        if(x !== 0) {
        if(win_nums.includes(x)) {
            score++;
        } 
        } else {
            zeroCount++;
        }
    })
    console.log(score);
    let max = score + zeroCount
    return [max !== 0 ? 7 - max : 6, score !== 0 ? 7 - score : 6];
}