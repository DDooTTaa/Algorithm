function solution(price, money, count) {
    let answer = 0;
    for(let i = 0; i <= count; i++) {
        answer = answer + (price * i);
    }
    return (answer - money) > 0 ? answer - money : 0;
}