function solution(n, w, num) {
    var answer = [];
    var a = 0;
    var h = Math.ceil(n / w);
    let t = [];
    let indexNum;
    for (let i = 1; i <= n; i++) {
      t.push(i);
        if(i == num) {
            if(answer.length % 2 == 0) {
                indexNum = t.length - 1;                
            } else {
                indexNum = answer[0].length - t.length;
            }
        }
        let lastArray = h - 1;
      if (i % w == 0) {
          if(answer.length % 2 == 0) {
            answer.push(t);
          } else {
            answer.push(t.reverse())
          }
        t = [];
      }
      if(i == n) {
          if(answer.length % 2 == 0) {
              answer.push(t);
          } else {
              for(let j = 0; j < answer[0].length; j++) {
                  if(!t[j]) {
                      t.push('');
                  }
              }
              answer.push(t.reverse());
          }
      }    
    }
    answer.reverse();
    answer.forEach(x => {
        if((x[indexNum] && x[indexNum] !== '') && x[indexNum] >= num) {
            a++;
        }
    })
    return a;
}