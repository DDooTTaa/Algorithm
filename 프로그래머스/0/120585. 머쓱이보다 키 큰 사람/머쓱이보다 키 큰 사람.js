function solution(array, height) {
    var answer = 0;
    array.forEach(x => {
        if(height < x) {
            answer++;
        }
    });
    
    return answer;
}