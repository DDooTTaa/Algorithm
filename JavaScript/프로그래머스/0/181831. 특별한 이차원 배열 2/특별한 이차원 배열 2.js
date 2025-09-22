function solution(arr) {
    var answer = 1;
    arr.forEach((x, i) => {
        x.forEach((y, j) => {
            if(arr[i][j] !== arr[j][i]) {
            answer = 0                
            }
        })
    })
    return +answer;
}