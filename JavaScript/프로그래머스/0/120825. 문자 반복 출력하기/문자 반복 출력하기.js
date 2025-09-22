function solution(my_string, n) {
    var my = "";
    for(i = 0; i < my_string.length; i++){
        for(j = 0; j < n; j++) {
            my = my + my_string[i];
        }
    }
    return my;
}