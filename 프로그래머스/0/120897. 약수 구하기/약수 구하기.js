function solution(n) {
    var answer = [];
    var k = 1;
    while(n > (k - 1)){
        if(n % k === 0) {
                answer.push(k);
        }
    k++
    }
    
    return answer;
}