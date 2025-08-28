function solution(arr, delete_list) {
    var answer = arr.map(x => {
        if(delete_list.includes(x)) {
            return;
        } else {
            return x;
        }
    })
    return answer.filter(x => x);
}