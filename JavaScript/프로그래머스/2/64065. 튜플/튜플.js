function solution(s) {
    var answer = [];
    const arr = JSON.parse(
      s
        .replaceAll("{", "[")
        .replaceAll("}", "]")
    );
    arr.sort((a, b) => a.length - b.length)
    console.log(arr);
    arr.forEach(x => {
        x.forEach(y => {
            if(!answer.includes(y)) {
                answer.push(y);
            }
        })
    })
    return answer;
}