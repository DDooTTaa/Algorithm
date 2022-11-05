function solution(s) {
    let zeroCount = 0;
    let calCount = 0;
    let newWord = s.split("");
    while(newWord.length !== 1) {
        let reWord = newWord.filter(word => {
            if (word === "0"){
                zeroCount += 1;
            } else {
                return 1;
            }
        });
        newWord = reWord.length.toString(2).split("");
        calCount += 1;
    }
    var answer = [calCount, zeroCount];
    return answer;
}