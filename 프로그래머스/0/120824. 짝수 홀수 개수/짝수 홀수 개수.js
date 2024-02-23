function solution(num_list) {
    var a = 0;
    var b = 0;
    num_list.forEach(x => {
        if(x % 2 === 0) {
            a++;
        } else {
            b++;
        }
    })
    return [a, b];
}