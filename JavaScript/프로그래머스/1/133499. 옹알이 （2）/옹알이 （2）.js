function solution(babbling) {
    let answer = 0;
    for (let word of babbling) {
        if (isValid(word)) answer++;
    }
    return answer;
}

function isValid(word) {
    const joka = ["aya", "ye", "woo", "ma"];
    let prev = "";

    while (word.length > 0) {
        let found = false;
        for (let j of joka) {
            if (word.startsWith(j) && j !== prev) {
                word = word.slice(j.length); // 앞부분 자르기
                prev = j; // 직전 단어 기록
                found = true;
                break;
            }
        }
        if (!found) return false; // 어떤 단어도 못 찾으면 실패
    }
    return true; // 끝까지 잘 잘렸으면 성공
}