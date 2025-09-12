function solution(todo_list, finished) {
    var answer = [];
    return todo_list.filter((x, i) => !finished[i]);
}