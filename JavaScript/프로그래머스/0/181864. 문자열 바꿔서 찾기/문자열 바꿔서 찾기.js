function solution(myString, pat) {
    var answer = [...myString].map(x => {
        if(x == 'A') return 'B'
        if(x == 'B') return 'A'
    }).join('');
    if(answer.includes(pat)) {
        return 1
    } else {
        return 0
    }
}