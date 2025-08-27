function solution(arr, k) {
    return arr.map(x => {
        if(k % 2 == 0) {
            return x + k;
        } else {
            return x * k;
        }
    });
}