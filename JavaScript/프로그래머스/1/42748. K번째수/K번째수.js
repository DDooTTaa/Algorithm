function solution(array, commands) {
    var answer = [];
    commands.forEach(x => {
        const tt = array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)[x[2] - 1];
        answer.push(tt)
    })
    return answer;
}