function solution(arr, queries) {
    queries.forEach((x, i) => {
      for (let j = x[0]; j <= x[1]; j++) {
        arr[j]++;
      }
    })
    return arr;
}