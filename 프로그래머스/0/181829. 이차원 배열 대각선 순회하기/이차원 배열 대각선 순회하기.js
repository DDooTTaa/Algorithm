function solution(board, k) {
    var answer = 0;
    let a = board.map((x, i) => {
        let c = 0;
        x.forEach((y, j) => {
            if(i + j <= k) {
                c+=y;
            }
        })
        return c
    })
    return a.reduce((a, c) => c += a, 0);
}