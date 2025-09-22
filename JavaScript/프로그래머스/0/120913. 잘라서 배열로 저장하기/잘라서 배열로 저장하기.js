function solution(my_str, n) {
    var answer = [];
    var c = "";
    [...my_str].forEach((x, i) => {
        if(i === 0) {
            answer.push(my_str.slice(0, n));
        }
        if((i + 1) % n === 0 && i !== my_str.length - 1) {
        answer.push(my_str.slice((i +1), (n + i + 1)));
        }
    })
    return answer;
}