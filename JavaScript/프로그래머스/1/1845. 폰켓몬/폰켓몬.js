function solution(nums) {
    var answer = 0;
    var temp = null;
    nums.sort((a, b) => a - b);
    nums.forEach(x => {
        if (x !== temp) {
            temp = x;
            if (answer < nums.length / 2) {
                answer++;
            }
        }
    })
    return answer;
}