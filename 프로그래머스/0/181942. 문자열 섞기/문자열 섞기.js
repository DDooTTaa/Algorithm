function solution(str1, str2) {
    var answer = [...str1].map((x,i) => {
        return x + [...str2][i]
    })
    return answer.join('');
}