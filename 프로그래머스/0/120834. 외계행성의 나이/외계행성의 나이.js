function solution(age) {
    var a = [];
    [...String(age)].forEach(x => {
        if(x === "0") {
            a.push("a");
        } else if(x === "1") {
            a.push("b");
        } else if(x === "2") {
            a.push("c");
        } else if(x === "3") {
            a.push("d");
        }else if(x === "4") {
            a.push("e");
        }else if(x === "5") {
            a.push("f");
        }else if(x === "6") {
            a.push("g");
        }else if(x === "7") {
            a.push("h");
        }else if(x === "8") {
            a.push("i");
        } else if(x === "9") {
            a.push("j");
        }
    })
    return a.join("");
}