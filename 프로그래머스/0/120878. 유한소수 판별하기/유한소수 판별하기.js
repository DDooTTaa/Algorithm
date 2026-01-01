function solution(a, b) {
  // 최대공약수 (유클리드 호제법)
  const gcd = (x, y) => {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return x;
  };

  // 1. 기약분수로 만들기
  const g = gcd(a, b);
  let denominator = b / g;

  // 2. 분모에서 2 제거
  while (denominator % 2 === 0) {
    denominator /= 2;
  }

  // 3. 분모에서 5 제거
  while (denominator % 5 === 0) {
    denominator /= 5;
  }

  // 4. 판별
  return denominator === 1 ? 1 : 2;
}