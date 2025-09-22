function solution(my_string) {
    return [...my_string].map(x => {
        var cca = x.charCodeAt();
        if(cca < 96) {
            cca += 32;
        } else {
            cca -= 32;
        }
        return String.fromCharCode(cca);;
    }).join("");
}