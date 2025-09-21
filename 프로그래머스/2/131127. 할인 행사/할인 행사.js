function solution(want, number, discount) {
    var answer = 0;
    var wanrNumberArray = [];
    number.forEach((x, i) => {
        for(let j = 0; j < x; j++) {
            wanrNumberArray.push(want[i]);            
        }
    })
    var total = wanrNumberArray.length;
    wanrNumberArray.sort();
    for(let i = 0; i < discount.length - total + 1; i++) {
        var arr = discount.slice(i, total + i);
        arr.sort();
        var flg = true;
        arr.forEach((y, j) => {
            if(y !== wanrNumberArray[j]) {
                flg = false;
            }
        });
        if(flg) {
            answer++;
        }
    }
    return answer;
}