function solution(n) {
    var count = 1;
    var num = 1;
    while(num !== n) {
        if(n % num === 0) {
            count++;
            num++;
        } else {
            num++;
        }
    }
    return count;
}