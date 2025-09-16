function solution(num_list) {
    return num_list.reduce((a , c) => c += a, 0) ** 2 < num_list.reduce((a , c) => c *= a, 1) ? 0 : 1;
}