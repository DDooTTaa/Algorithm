function solution(my_string) {
    return my_string.split("").reverse().reduce((a, b) => a + b);
}