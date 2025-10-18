function solution(arr, queries) {
    var answer = [];
    queries.forEach((x, i) => {
        for(let j = x[0]; j <= x[1]; j++) {
            if(j % x[2] == 0) {
                arr[j]++;
            }
        }
    })
    return arr;
}