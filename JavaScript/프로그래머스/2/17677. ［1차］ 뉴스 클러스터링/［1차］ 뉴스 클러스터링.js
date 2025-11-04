function solution(str1, str2) {
  function makeBigrams(str) {
    str = str.toUpperCase();
    const arr = [];
    for (let i = 0; i < str.length - 1; i++) {
      const a = str[i], b = str[i+1];
      if (a >= 'A' && a <= 'Z' && b >= 'A' && b <= 'Z') {
        arr.push(a + b);
      }
    }
    return arr;
  }

  const A = makeBigrams(str1);
  const B = makeBigrams(str2);

  if (A.length === 0 && B.length === 0) return 65536;

  const mapA = {};
  const mapB = {};

  A.forEach(x => mapA[x] = (mapA[x] || 0) + 1);
  B.forEach(x => mapB[x] = (mapB[x] || 0) + 1);

  let inter = 0;
  let uni = 0;

  const keys = new Set([...Object.keys(mapA), ...Object.keys(mapB)]);
  keys.forEach(k => {
    const a = mapA[k] || 0;
    const b = mapB[k] || 0;
    inter += Math.min(a, b);
    uni += Math.max(a, b);
  });

  return Math.floor(inter / uni * 65536);
}