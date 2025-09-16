function solution(my_string, is_suffix) {
    var answer = 0;
    return my_string.slice(my_string.length - is_suffix.length, my_string.length) == is_suffix ? 1 : 0;
}