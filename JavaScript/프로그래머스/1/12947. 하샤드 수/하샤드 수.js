function solution(x) {
    var answer = true;
    let sum = 0;
    for(let i= 0; i < String(x).length; i++) {
        sum += parseInt(String(x)[i]);
    }
    console.log(sum);
    return x % sum === 0;
}