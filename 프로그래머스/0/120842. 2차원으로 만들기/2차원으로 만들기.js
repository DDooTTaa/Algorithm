function solution(num_list, n) {
    var answer = [];
    var abc = [];
    num_list.forEach((x,i) => {
        abc.push(x);
        if((i + 1) % n === 0) {
            answer.push(abc);
            abc = [];
        } 
    })
    return answer;
}