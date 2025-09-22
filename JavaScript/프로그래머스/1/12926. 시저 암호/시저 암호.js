function solution(s, n) {
    const stack = [];
    let i = 0;
    while(true) {
        let code = s.charCodeAt(i);
        if(code > 64 && code < 91) {
            code += n;
            if(code >= 91) {
                code -= 26;
            }
        } else if (code > 96 && code < 123) {
            code += n;
            if(code >= 123) {
                code -= 26;
            }
        }
        stack.push(String.fromCharCode(code));
        if(i === s.length - 1) {
            break;
        }
        i++;
    }
    return stack.join('');
}