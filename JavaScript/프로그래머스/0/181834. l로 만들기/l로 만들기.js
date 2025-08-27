function solution(myString) {
    return [...myString].map(x => { if(x.charCodeAt() < 108) {
        return 'l'
    } else {
        return x;
    }}).join('');
}