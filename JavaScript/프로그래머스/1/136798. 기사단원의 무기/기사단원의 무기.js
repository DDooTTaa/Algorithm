function solution(number, limit, power) {
    var answer = [];
    for(let i = number; i >= 1; i--) {
        answer.push(getDivisors(i).length > limit ? power : getDivisors(i).length );
    }
    return answer.reduce((arr, cur) => arr + cur, 0);
}

function getDivisors(n) {
  const divisors = [];
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) { 
        divisors.push(n / i);
      }
    }
  }
  return divisors;
}