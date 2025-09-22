function solution(n) {
    var answer = 0;
    for(let i = n; i > 0; i--) {
        if(n % 2 == 0 && i % 2 == 0) {
            answer+= (i * i);
        } else if (i % 2 !== 0 && n % 2 !== 0){
            answer+= i;            
        }
    }
    return answer;
}