function solution(num_list) {
    var answer = 0;
    return Number(num_list.filter(x => x % 2 == 0).join('')) +  Number(num_list.filter(x => x % 2 == 1).join('')) ;
}