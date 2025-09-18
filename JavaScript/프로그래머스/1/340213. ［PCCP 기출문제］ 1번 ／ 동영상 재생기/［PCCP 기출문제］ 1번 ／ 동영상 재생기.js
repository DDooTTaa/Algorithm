  function solution(video_len, pos, op_start, op_end, commands) {
    var videoLen = video_len.split(':').map(x => Number(x));
    var posNow = pos.split(':').map(x => Number(x));
    var answer = posNow;
    var opStartNow = op_start.split(':').map(x => Number(x));
    var opEndNow = op_end.split(':').map(x => Number(x));
    commands.forEach(x => {
      if (((answer[0] == opStartNow[0] && answer[1] >= opStartNow[1])
        || answer[0] > opStartNow[0])
        && ((answer[0] == opEndNow[0] && answer[1] <= opEndNow[1])
          || answer[0] < opEndNow[0])) {
        answer = opEndNow;
      }
      if (x == 'prev') {
        answer = minusAnswer(answer);
      } else {
        answer = plusAnswer(answer, videoLen);
      }
    });
    if (((answer[0] == opStartNow[0] && answer[1] >= opStartNow[1])
      || answer[0] > opStartNow[0])
      && ((answer[0] == opEndNow[0] && answer[1] <= opEndNow[1])
        || answer[0] < opEndNow[0])) {
      answer = opEndNow;
    }
    return answer.map(x => x < 10 ? '0' + x : x).join(':');
  }
  function plusAnswer(ans, videoLen) {
    let [hour, min] = ans;
    if (min >= 50) {
      hour++;
      min -= 50;
    } else {
      min += 10;
    }
    if (hour >= videoLen[0] && min + 10 > videoLen[1]) {
      hour = videoLen[0];
      min = videoLen[1];
    }
    return [hour, min];
  }
  function minusAnswer(ans) {
    let [hour, min] = ans;
    if (min < 10) {
      if (hour !== 0) {
        hour--;
        min += 50;
      } else {
        hour = 0;
        min = 0;
      }
    } else {
      min -= 10;
    }
    return [hour, min];
  }