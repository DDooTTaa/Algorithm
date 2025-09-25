function solution(arr, flag) {
    var answer = [];
    flag.forEach((x, i) => {
        console.log(answer);
        if(x) {
            for(let j = 0; j < arr[i]; j++) {
                answer.push(arr[i]);
                answer.push(arr[i]);
            }
        } else {
            answer = answer.slice(0, answer.length - arr[i])
        }
    })
    return answer;
}