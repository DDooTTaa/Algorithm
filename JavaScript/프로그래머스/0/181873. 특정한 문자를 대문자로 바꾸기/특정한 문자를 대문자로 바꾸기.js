function solution(my_string, alp) {
    return     [...my_string].map(x => {
        if(x == alp) {
            return x.toUpperCase();
        } else {
            return x.toLowerCase();
        }
    }).join('')

}