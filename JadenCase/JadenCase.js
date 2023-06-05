function solution(s) {
    const words = s.split(" ");
    const answer = words.map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()).join(" ");
    return answer;
}