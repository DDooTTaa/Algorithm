function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((a, c) => c+=a, 0) : num_list.reduce((a, c) => c*=a, 1);
} 