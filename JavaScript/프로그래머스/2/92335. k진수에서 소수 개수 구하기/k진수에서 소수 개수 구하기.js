  function getPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return 0;
      }
    }
    return 1;
  }

  function solution(n, k) {
    var arr = n.toString(k).split(0).filter(x => x);
    var answer = 0;
    arr.forEach(x => {
      if (x > 1) {
        answer += getPrime(x);
      }
    })
    return answer;
  }