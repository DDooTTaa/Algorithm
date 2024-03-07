function solution(str1, str2) {
    var answer = 2;
    var l = str2.length;
    for(let i = 0; i < str1.length; i++) {
        if(str1.slice(i, l + i) === str2) {
            answer = 1;
        }
    }
    return answer;
}