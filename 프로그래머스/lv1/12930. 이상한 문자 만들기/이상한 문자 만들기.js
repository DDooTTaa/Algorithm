function solution(s) {
    var answer = '';
    return s.split(' ').map(x => {
        return [...x].map((y ,idx) => {
            if(idx % 2 === 0) return y.toUpperCase() 
            else return y.toLowerCase()}).join('');
        }).join(' ')
}