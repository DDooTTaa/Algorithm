function solution(str_list, ex) {
    var answer = '';
    return str_list.map(x => x.includes(ex) ? '' : x).join('');
}