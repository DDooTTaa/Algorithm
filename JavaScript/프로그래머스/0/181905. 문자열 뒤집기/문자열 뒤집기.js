function solution(my_string, s, e) {
    var answer = [...my_string.slice(s, e + 1)].reverse().join('');
    console.log(answer);
    var t = [...my_string].map((x, i) => {
        if (i >= s && i <= e ) {
            return answer[i - s];
        } else {
            return x;
        }
    });
    return t.join('')
}