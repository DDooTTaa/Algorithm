function solution (my_string) {
    let numStr = "";
    let sum = 0;
    for (let i = 0 ; i < my_string.length ; i++) {
        if (!isNaN(parseInt(my_string[i]))) {
            numStr += my_string[i]
        } else {
            if (numStr !== "") {
                sum += parseInt(numStr);
                numStr = "";
            }
        }
    }
    if (numStr !== "") {
        sum += parseInt(numStr);
    }
    return sum;
}