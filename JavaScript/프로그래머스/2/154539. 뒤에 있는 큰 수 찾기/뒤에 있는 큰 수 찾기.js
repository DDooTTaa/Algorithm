function solution(numbers) {
    const n = numbers.length;
    const answer = Array(n).fill(-1);
    const stack = []; // 인덱스 저장

    for (let i = 0; i < n; i++) {
      while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
        const idx = stack.pop();
        answer[idx] = numbers[i];
      }
      stack.push(i);
    }

    return answer;

}