function solution(myStr) {
    var answer = [];
    var t = '';
    [...myStr].forEach((x, i) => {
        if(x == 'a' || x == 'b' || x == 'c') {
            if(t !== '') {
                answer.push(t);                
            }
            t = '';
        } else if(myStr.length - 1 == i) {
            t += x;
            answer.push(t);
        } else {
            t += x;
        }
    })
    return answer.length == 0 ? ['EMPTY'] : answer;
}