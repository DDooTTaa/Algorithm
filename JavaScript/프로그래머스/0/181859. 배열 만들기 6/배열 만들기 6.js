function solution(arr) {
    var answer = [];
    var stk = [];
    arr.forEach((x, i) => {
        if(stk.length == 0) {
            stk.push(x);
        } else if(stk[stk.length - 1] == x) {
            stk.pop();
        } else if(stk[stk.length - 1] !== x) {
            stk.push(x);
        }
    })
    return stk.length == 0 ? [-1] : stk;
}