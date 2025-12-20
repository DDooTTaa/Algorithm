function solution(rank, attendance) {
  const selected = [];

  for (let i = 0; i < rank.length; i++) {
    if (attendance[i]) {
      selected.push({ idx: i, rank: rank[i] });
    }
  }

  selected.sort((a, b) => a.rank - b.rank);

  const a = selected[0].idx;
  const b = selected[1].idx;
  const c = selected[2].idx;

  return 10000 * a + 100 * b + c;
}