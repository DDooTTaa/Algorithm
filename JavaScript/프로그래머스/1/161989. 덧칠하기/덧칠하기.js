function solution(n, m, section) {
    var answer = 1;
    let position = section[0];
    section.forEach(x => {
        if(position + m <= x) {
            answer++;
            position = x;
        }
    })
    return answer;
}