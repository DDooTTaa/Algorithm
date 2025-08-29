function solution(n_str) {
    let s = false;
    return [...n_str].filter(x => {
        if(x !== '0') {
            s = true;
        }
        if(s) {
            return x;
        }
    }).join('');
}