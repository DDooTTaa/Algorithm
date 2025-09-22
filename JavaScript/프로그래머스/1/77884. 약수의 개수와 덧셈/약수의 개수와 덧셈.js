function solution(left, right) {
    var answer = 0;
    let index = 1;
    let result = [];
    for(let i = left; i <= right; i++) {
         while (index <= i / 2) {
             if (i % index === 0) result.push(index);
             index++;
         }
        result = [...result, i];
        if(result.length % 2 === 0) {
            answer += i;   
        } else {
            answer -= i;
        }
        index = 1;
        result = [];
    }
    return answer;
}