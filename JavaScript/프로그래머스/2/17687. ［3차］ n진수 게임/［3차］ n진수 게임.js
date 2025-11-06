  function solution(n, t, m, p) {
    var count = 0;
    var k = 0;
    var answer = '';
    while (answer.length !== t) {
      var arr = k.toString(n).split('');
      arr.forEach(x => {
        count++;
        if (count == p || ((count - p) % m == 0 && answer.length !== t)) {
          answer += x.toUpperCase();
        }
      });
        k++
    }
    return answer;
  }