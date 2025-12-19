  function solution(fees, records) {
    var answer = new Set();
    var stack = new Set();
    records.forEach(x => {
      var record = x.split(' ');
      if (record[2] === 'IN') {
        stack[record[1]] = record[0];
      } else {
        if (answer[record[1]]) {
          answer[record[1]] = answer[record[1]] + dateFormat(stack[record[1]], record[0]);
        } else {
          answer[record[1]] = dateFormat(stack[record[1]], record[0]);
        }
        stack[record[1]] = null;
      }
    });
    for (var key in stack) {
      if (!stack[key]) continue;
      const value = dateFormat(stack[key], '23:59');
      answer[key] = answer[key] ? value + answer[key] : value;
    }
    var result = [];
    for (var an in answer) {
      if (answer[an] <= fees[0]) {
        result.push({ num: an, fee: fees[1] });
      } else {
        result.push({ num: an, fee: fees[1] + (Math.ceil((answer[an] - fees[0]) / fees[2]) * fees[3]) })
      }
    }
    result.sort((a, b) => a['num'] - b['num']);
    var k = [];
    result.forEach(x => {
      k.push(x.fee)
    })
    return k;
  }

  function dateFormat(x, y) {
    var [xh, xm] = x.split(':');
    var [yh, ym] = y.split(':');
    return (yh - xh) * 60 + (ym - xm);
  }