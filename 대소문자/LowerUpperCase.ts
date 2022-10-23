function solution(s) {
    const words = s.split(" ");
    const answer = words.map(x => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()).join(" ");
    /**
     * word[0]은 빈 문자열을 만나면 undefined를,  word.charAt(0)은 빈 문자열을 만나면 빈 문자열을 반환한다.
     */
    return answer;
}