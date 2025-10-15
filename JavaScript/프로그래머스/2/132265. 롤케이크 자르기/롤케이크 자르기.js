function solution(topping) {
  const left = new Map();
  const right = new Map();
  let answer = 0;

  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  for (const t of topping) {
    left.set(t, (left.get(t) || 0) + 1);
    right.set(t, right.get(t) - 1);
    if (right.get(t) === 0) right.delete(t);
    if (left.size === right.size) answer++;
  }

  return answer;
}