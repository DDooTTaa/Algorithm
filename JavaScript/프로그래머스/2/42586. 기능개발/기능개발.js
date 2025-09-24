function solution(progresses, speeds) {
    var answer = [];
    var clearArr = progresses.map(x => false);
    while (progresses.length !== 0) {
      for (let i = 0; i < progresses.length; i++) {
        progresses[i] += speeds[i];
          if(progresses[i] >= 100) {
              if(i == 0) {
              clearArr[0] = true;                  
              } else if (clearArr[i - 1]) {
                  clearArr[i] = true;
              }
          }
      }
    if(clearArr[0] == true) {
        var count = 0;
        for(let j = 0; j < clearArr.length; j++)  {
            if(clearArr[j]) {
                count++;
                progresses[j] = undefined;
                speeds[j] = undefined;
            }
        }
        progresses = progresses.filter(x => x !== undefined);
        speeds = speeds.filter(x => x !== undefined);
        clearArr = clearArr.filter(x => x !== true);
        answer.push(count);
    }
    }
    return answer;
}