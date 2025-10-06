function solution(arr) {
  let len = arr.length;
  let pow = 1;
  
  while (pow < len) {
    pow *= 2;
  }
  let zerosToAdd = pow - len;

  // 0을 뒤에 추가
  return arr.concat(Array(zerosToAdd).fill(0));
}
