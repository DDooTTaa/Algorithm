function solution(l, r) {
  const result = [];

  for (let i = l; i <= r; i++) {
    const str = String(i);
    let isValid = true;

    for (const ch of str) {
      if (ch !== '0' && ch !== '5') {
        isValid = false;
        break;
      }
    }

    if (isValid) result.push(i);
  }

  return result.length ? result : [-1];
}