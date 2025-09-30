function solution(num_list) {
    var answer = 0;
    num_list.forEach(x => {
        if(x == 1) {
            
        } else if(x < 4) {
            answer+= 1;
        } else if(x < 8) {
            answer+= 2;
        } else if(x < 16) {
            answer+= 3;
        } else {
            answer+= 4;
        }
    })
    return answer;
}