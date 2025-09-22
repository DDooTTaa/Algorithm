function solution(keyinput, board) {
    var answer = [0, 0];
    var w = (board[0] - 1) / 2;
    var h = (board[1] - 1) / 2;
    keyinput.forEach(x => {
            if(x === "left") {
                answer[0] === (w * -1) ? answer[0] : answer[0] -= 1;
            } else if( x === "right") {
                answer[0] === w ? answer[0] : answer[0] += 1;
            }
            if(x === "up") {
                answer[1] === h ? answer[1] : answer[1] += 1;
            } else if(x === "down") {
                answer[1] === (h * -1) ? answer[1] : answer[1] -= 1;
            }
    })
    return answer;
}
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     
                     