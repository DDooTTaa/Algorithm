function solution(s, skip, index) {
    let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alphabetArr = alphabetArr.filter(ch => !skip.includes(ch));
    const answer = [...s].map(x => {
        let point = x.charCodeAt(0);
        console.log(alphabetArr.findIndex(ch => ch === x));
        return alphabetArr[(alphabetArr.findIndex(ch => ch === x) + index) % alphabetArr.length];
    })
    return answer.join('');
}