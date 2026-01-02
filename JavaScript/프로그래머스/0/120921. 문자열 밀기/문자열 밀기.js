function solution(A, B) {
  if (A.length !== B.length) return -1;

  const doubled = A + A;
  const len = A.length;
  let answer = Infinity;

  for (let i = 0; i < len; i++) {
    if (doubled.slice(i, i + len) === B) {
      const rightMoves = (len - i) % len;
      answer = Math.min(answer, rightMoves);
    }
  }

  return answer === Infinity ? -1 : answer;
}