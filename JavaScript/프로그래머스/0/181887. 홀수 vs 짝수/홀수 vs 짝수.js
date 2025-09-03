function solution(num_list) {
    var answer = 0;
    var answer2 = 0;
    num_list.forEach((x, i) => {
        if(i % 2 == 0) {
            answer+=x;
        } else {
            answer2+=x;
        }
    })
    return answer > answer2 ? answer : answer2;
}