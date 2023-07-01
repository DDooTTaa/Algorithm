function solution(s) {
    if(s.length !== 4 && s.length !== 6) {
        return false;
    } else {
    return [...s].map(Number).join('').length === s.length;
    }
}