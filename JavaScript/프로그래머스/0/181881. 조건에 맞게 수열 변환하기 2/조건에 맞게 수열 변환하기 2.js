function solution(arr) {
  let x = 0;
  let prev = [...arr];

  while (true) {
    // 규칙에 맞게 새로운 배열 생성
    const next = prev.map(n => {
      if (n >= 50 && n % 2 === 0) return n / 2;
      if (n < 50 && n % 2 === 1) return n * 2 + 1;
      return n;
    });

    // 이전 배열과 동일하면 종료
    const isSame = next.every((v, i) => v === prev[i]);
    if (isSame) return x;

    // 다음 단계로 진행
    prev = next;
    x++;
  }
}
