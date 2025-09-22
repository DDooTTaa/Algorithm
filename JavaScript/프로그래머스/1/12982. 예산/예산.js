function solution(d, budget) {
    var answer = 0;
    let count = 0;
    d.sort((a, b) => a - b);
    d.map(x => {
        if(answer + x <= budget) {
            answer+= x;
            count++;
        }
    })
    return count;
}