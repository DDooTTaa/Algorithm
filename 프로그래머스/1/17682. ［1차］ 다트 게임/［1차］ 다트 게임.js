function solution(dartResult) {
    let arr = [];
    let stack = "";

    for (let i = 0; i < dartResult.length; i++) {
        let ch = dartResult[i];
        stack += ch;

        if (isNaN(ch)) {
            if (ch === "S" || ch === "D" || ch === "T") {
                if (i + 1 >= dartResult.length || !["*", "#"].includes(dartResult[i + 1])) {
                    arr.push(stack);
                    stack = "";
                }
            } else if (ch === "*" || ch === "#") {
                arr.push(stack);
                stack = "";
            }
        }
    }

    let scores = [];
    arr.forEach((token, idx) => {
        let num = token.match(/\d+/) ? parseInt(token.match(/\d+/)[0]) : null;

        if (token.includes("S")) num = num ** 1;
        else if (token.includes("D")) num = num ** 2;
        else if (token.includes("T")) num = num ** 3;

        if (token.includes("*")) {
            num *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        } else if (token.includes("#")) {
            num *= -1;
        }

        if (num !== null) scores.push(num);
    });

    return scores.reduce((a, b) => a + b, 0);
}