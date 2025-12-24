function solution(score) {
    var answer = [];
    var stack = [];
    for(let i = 0; i < score.length; i++) {
        stack.push({num: i, val :score[i][0] + score[i][1]});
    }
    stack.sort((a, b) => b['val'] - a['val'])
    var k = 0;
    for(let i = 0; i < score.length; i++){
        if(stack[k].val == stack[i].val) {            
        answer[stack[i].num] = k + 1;
        } else {
        answer[stack[i].num] = i + 1;            
        k = i;
        }
    }
    return answer;
}