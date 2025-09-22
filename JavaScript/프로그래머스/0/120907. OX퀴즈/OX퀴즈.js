function solution(quiz) {
    var answer = quiz.map(x => x.split(","));
    answer = answer.map(x => x[0].split("="));
    return answer.map(x => eval(x[0]) === eval(x[1]) ? "O" : "X");
}