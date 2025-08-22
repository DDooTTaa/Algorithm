function solution(my_string, index_list) {
    var answer = [];
    const strArr = my_string.split('');
    index_list.forEach(x => {
        answer.push(strArr[x]);
    })
    return answer.join('');
}