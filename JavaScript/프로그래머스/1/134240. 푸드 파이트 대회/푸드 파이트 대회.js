function solution(food) {
    var answer = '0';
    let fo = '';
    food.forEach((x, idx) => {
        if(idx !== 0) {
        for(let i = 0; i < Math.floor(parseInt(x)); i++) {
            if(i % 2 === 1) {
                fo += String(idx);
            }
        }
        }
    })
    return fo + answer + fo.split('').reverse().join('');
}