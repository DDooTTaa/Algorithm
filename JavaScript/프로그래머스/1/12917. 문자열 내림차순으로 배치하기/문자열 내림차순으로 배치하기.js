function solution(s) {
    var answer = '';
    return [...s].sort((a, b) => b.charCodeAt() - a.charCodeAt()).join("");
}