function solution(order) {
  let stack = [];
  let current = 1;
  let count = 0;
  const n = order.length;

  for (let target of order) {
    // current가 target 될 때까지 넣기
    while (current <= n && (stack.length === 0 || stack[stack.length - 1] !== target)) {
      stack.push(current);
      current++;
      if (current > n) break;
    }

    // 스택 top이 target이면 꺼냄
    if (stack[stack.length - 1] === target) {
      stack.pop();
      count++;
    } else {
      break;
    }
  }

  return count;
}