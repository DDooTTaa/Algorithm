function solution(arr, k) {
    var answer = Array(k).fill(-1);
    var t = 0;
    arr.forEach(x => {
        if(!answer.includes(x) && k > t) {
            answer[t] = x;
            t++;
        }
    })
    return answer;
}