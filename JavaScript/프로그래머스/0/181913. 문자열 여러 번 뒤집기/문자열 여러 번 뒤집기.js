function solution(my_string, queries) {
  let str = my_string.split('');
  for (let [s, e] of queries) {
    const reversed = str.slice(s, e + 1).reverse();
    str.splice(s, e - s + 1, ...reversed);
  }
  return str.join('');
}