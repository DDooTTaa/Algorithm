function solution(ingredient) {
    let answer = 0;
    let stack = [];

    for (let x of ingredient) {
        stack.push(x);

        if (stack.length >= 4) {
            const lastFour = stack.slice(-4).join("");
            if (lastFour === "1231") {
                stack.splice(-4);
                answer++;
            }
        }
    }
    return answer;
}