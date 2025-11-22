function solution(arr) {
  const row = arr.length;
  const col = arr[0].length;
  if (row > col) {
    const diff = row - col;
    return arr.map(r => [...r, ...Array(diff).fill(0)]);
  }
  if (col > row) {
    const diff = col - row;
    const newRows = Array.from({ length: diff }, () => Array(col).fill(0));
    return [...arr, ...newRows];
  }
  return arr;
}