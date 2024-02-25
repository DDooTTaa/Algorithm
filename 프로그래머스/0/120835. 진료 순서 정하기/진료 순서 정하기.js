function solution(emergency) {
    var obj = JSON.parse(JSON.stringify(emergency));
    emergency.sort((a, b) => b - a);
    var answer = [];
    obj.forEach((x, i) => {
        answer.push(emergency.findIndex(z => z === x) + 1);
    })
    return answer;
}