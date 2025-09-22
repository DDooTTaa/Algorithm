function solution(my_string, m, c) {
    let va = [...my_string].filter((x, i) => {
      if (i % m == c - 1) {
        return true;
      } else {
        return false;
      }
    })
    return va.join('');
}