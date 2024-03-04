function solution(s) {
    var acc = [];
    s.split(" ").forEach((x,i) => {
        if(x !== "Z") {
            acc.push(parseInt(x));
        } else {
            acc.pop();
        }
    });
    return acc.reduce((x, cur) => x + cur, 0);
}