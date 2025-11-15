function solution(my_string, overwrite_string, s) {
    var str = [...my_string];
    for(let i = 0; i < my_string.length; i++) {
        if(s <= i) {
            for(let j = 0; j < overwrite_string.length; j++) {
            str[s + j] = overwrite_string[j]                
            }
        } 
    }
    return str.join('');
}