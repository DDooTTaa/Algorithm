function solution(t, p) {
    const arr = [];
    for(let i = 0; i < t.length; i++) {
        const b = t.slice(i, p.length + i);
        if (b.length >= p.length) {
            arr.push(b);
        }
    }
    const answer = arr.filter(x => parseInt(x) <= parseInt(p));
    return answer.length;
}