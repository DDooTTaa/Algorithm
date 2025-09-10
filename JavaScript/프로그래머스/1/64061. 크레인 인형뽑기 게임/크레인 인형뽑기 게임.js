function solution(board, moves) {
   let answer = Array.from({ length: board.length }, () => []);
    let result = 0;
    for(let x of board) {
        for(let [i, y] of x.entries()) {
            if(y !== 0) {
                answer[i].push(y);                    
            }
        }
    }
    var basket = [];
    for(let z of moves) {
        if(answer[z - 1].length !== 0) {
            if(basket[basket.length - 1] == answer[z - 1][0]) {
                result++;
                basket.pop();
            } else {
                basket.push(answer[z - 1][0]);                
            }
            answer[z - 1].shift();
        }
    }
    return result * 2;
}