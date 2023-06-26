function solution(k, tangerine) {
  let answer = 0;
  const tDict = {};
  // 귤 객체를 만든다
  tangerine.forEach((t) => {
      tDict[t] = (tDict[t] || 0) + 1
  });
  // 값을 기준으로 내림차순으로 정렬 (1 이 몇개, 2가 몇개, 3이 몇개로 나온다)
  const tArr = Object.values(tDict).sort((a, b) => b - a);
  // 필요한 귤만큼 가짓수를 더해줍니다
  for (const t of tArr) {
    answer++;
    if (k > t) {
        k -= t
    } else {
        break;
    };
  }
  return answer;
}