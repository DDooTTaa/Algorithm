function solution(sides) {
    sides.sort((a, b) => a - b);
    let max = sides[0]+sides[1] -1;
    
    let x;
    let answer = 0;
    answer += max - sides[1];
    
    for(let i = sides[1] ; i> 0 ;i--){
        if(i+sides[0] > sides[1]){
            answer +=1;
        }
    }
    
    
    return answer;
}