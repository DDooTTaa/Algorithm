function solution(s) {
    var answer = 0;
    if (s.length % 2 === 1) return 0;
    for(let i = 0; i < s.length; i++) {
        let a = s.split('');
        a[a.length] = a[0];
        a.shift();
        s = a.join('');
        if(!count(s)) {
        answer++;
    }
    }
    return answer;
}

function count(word) {
        const stack = [];
        let flag = false;
        for(let i= 0; i < word.length; i++) {
        if(word[i] === `[` || word[i] === `{` || word[i] === `(`) {
            stack.push(word[i]);
        } else {
            let leftWord = stack.pop();
        switch(word[i]) {
            case "]":
                if(leftWord !== '[') {
                    flag = true;
                }
                break;
            case "}":
                if(leftWord !== '{') {
                    flag = true;
                }
                break;
            case ")":
                if(leftWord !== '(') {
                    flag = true;
                }
                break;
        }
        }
    }
    return flag;
}