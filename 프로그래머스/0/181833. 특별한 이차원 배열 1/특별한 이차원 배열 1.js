function solution(n) {
    var answer =  [];
    for(let i = 0; i <n; i++) {
    answer.push(Array.from({ length: n }, (_, j) => j == i ? 1 : 0))        
    }
    return answer;
}