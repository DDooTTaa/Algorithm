function solution(survey, choices) {
    var arr = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
    var answer = '';
    for(let [i, x] of survey.entries()) {
        if(scoreMap(choices[i]) > 0) {
            arr[[...x][0]] += scoreMap(choices[i])            
        } else {
            arr[[...x][1]] -= scoreMap(choices[i])                        
        }
    }
    arr['T'] > arr['R'] ? answer+='T' : answer+='R';
    arr['F'] > arr['C'] ? answer+='F' : answer+='C';
    arr['M'] > arr['J'] ? answer+='M' : answer+='J';
    arr['N'] > arr['A'] ? answer+='N' : answer+='A';
    return answer;
}

function scoreMap(num) {
    switch (num) {
        case 1:
        return 3
        case 2:
        return 2
        case 3:
        return 1
        case 4:
        return 0
        case 5:
        return -1
        case 6:
        return -2
        case 7: 
        return -3            
    }
}