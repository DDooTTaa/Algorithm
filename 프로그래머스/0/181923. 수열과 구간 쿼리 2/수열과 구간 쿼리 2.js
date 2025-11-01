function solution(arr, queries) {
    return queries.map((x, i) => {
        var a = -1;
        arr.forEach((y, j) => {
            if(x[0] <= j && x[1] >= j && y > x[2]) {
                if(a == -1) {
                    a = y;                    
                } else if(a > y) {
                    a = y;
                }
            }
        });
        return a;
    });;
}