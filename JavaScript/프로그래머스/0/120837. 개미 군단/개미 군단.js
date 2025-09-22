function solution(hp) {
    var a = 0;
    if(hp % 5 === 0) {
        a = hp / 5;
    } else if(hp % 5 === 3 || hp % 5 === 1) {
        a = Math.floor(hp / 5) + 1;
    } else {
        a = Math.floor(hp/ 5) + 2;
    }
    return a;
}