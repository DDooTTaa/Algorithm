function solution(order) {
    var answer = order.length * 4500
    order.map(x => {
      if (x.includes('cafelatte')) answer += 500;
    })
    return answer;
}