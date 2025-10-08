function solution(strArr) {
    var answer = {};
    strArr.forEach(x => {
        if(answer[String(x.length)]) {
            answer[String(x.length)] = answer[String(x.length)] + 1;
        } else {
            answer[String(x.length)] = 1;
        }
    })
    return  Math.max(...Object.values(answer));
}