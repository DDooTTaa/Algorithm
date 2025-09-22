function solution(my_string, num1, num2) {
    var stack = [];
    var temp;
    [...my_string].map((x, i) => {
        if(i === num1) {
            stack.push([...my_string][num2]);
            temp = x;
        } else if(i === num2) {
            stack.push(temp);
        } else {
            stack.push(x);
        }
    })
    return stack.join("");
}