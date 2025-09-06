function solution(arr, idx) {
    var answer = -1;
    arr.forEach((x, i) => {
        if(i >= idx && x == 1 && answer == -1) {
            answer = i;
        }
    })
    return answer;
}