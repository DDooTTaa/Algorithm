function solution(s){
    let score = 0;
    s.split('').forEach(x => {
        if(x === 'p' || x === 'P') {
            score++;
        } else if (x === 'y' || x === 'Y') {
            score--;
        }
    })
    return score === 0 ? true : false;
}