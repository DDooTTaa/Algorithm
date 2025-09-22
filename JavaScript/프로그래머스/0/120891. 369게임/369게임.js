function solution(order) {
    return [...String(order)].reduce((acc, cur) => (cur === "3" || cur === "6" || cur === "9") ? acc = acc + 1 : acc = acc, 0);
}