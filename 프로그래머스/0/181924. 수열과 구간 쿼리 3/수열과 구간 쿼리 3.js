function solution(arr, queries) {
    var answer = [];
    queries.forEach(x => {
        let temp = arr[x[0]];
        arr[x[0]] = arr[x[1]];
        arr[x[1]] = temp;
    })
    return arr;
}