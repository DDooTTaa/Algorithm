function solution(numLog) {
    var answer = '';
    let stack = 0;
    numLog.forEach(x => {
        if(stack + 1 == x) {
            answer+= 'w';
        } else if(stack - 1 == x) {
            answer+= 's';
        } else if(stack + 10 == x) {
            answer+= 'd';
        } else if(stack - 10 == x) {
            answer+= 'a';
        }
        stack = x;
    })
    return answer;
}