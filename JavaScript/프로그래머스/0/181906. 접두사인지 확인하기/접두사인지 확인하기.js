function solution(my_string, is_prefix) {
    var answer = 1;
    is_prefix.split('').forEach((x, i) => {
        if(my_string.split('')[i] !== x) {
            answer = 0;
        }
    })
    return answer;
}