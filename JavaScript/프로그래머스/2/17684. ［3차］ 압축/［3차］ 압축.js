function solution(msg) {
    const dictionary = {};
    const result = [];
    let dictIndex = 1;

    // 초기 사전 생성 (A-Z)
    for (let i = 0; i < 26; i++) {
      dictionary[String.fromCharCode(65 + i)] = i + 1;
    }
    dictIndex = 27;

    let w = '';
    for (let i = 0; i < msg.length; i++) {
      const c = msg[i];
      const wc = w + c;
      if (dictionary[wc]) {
        w = wc;
      } else {
        result.push(dictionary[w]);
        dictionary[wc] = dictIndex++;
        w = c;
      }
    }
    if (w !== '') result.push(dictionary[w]);
    return result;
}