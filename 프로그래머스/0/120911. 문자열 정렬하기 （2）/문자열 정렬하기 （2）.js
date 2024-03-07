function solution(my_string) {
    return [...my_string].map(x => {
        if(x.charCodeAt() < 97) {
            return String.fromCharCode((x.charCodeAt() + 32));
        } else {
            return x;
        }
    }).sort().join("");
}