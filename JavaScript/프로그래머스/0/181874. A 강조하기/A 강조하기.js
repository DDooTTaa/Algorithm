function solution(myString) {
    var answer = '';
    console.log('a'.toUpperCase())
    return [...myString].map(x => {
        if(x == 'a' || x == 'A') {
        return 'A'
        } else {
        return x.toLowerCase()
    }}).join('');
}