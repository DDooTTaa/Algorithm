function solution(keymap, targets) {
    let alphabet = {
  A: 0, B: 0, C: 0, D: 0, E: 0, F: 0,
  G: 0, H: 0, I: 0, J: 0, K: 0, L: 0,
  M: 0, N: 0, O: 0, P: 0, Q: 0, R: 0,
  S: 0, T: 0, U: 0, V: 0, W: 0, X: 0,
  Y: 0, Z: 0
};
    keymap.forEach(x => {
        [...x].forEach((y, i) => {
            if(alphabet[y] === 0 || alphabet[y] > i + 1) {
            alphabet[y] = i + 1;                   
            }
        })
    })
    const answer = targets.map(x => {
       let t = [...x].reduce((acc, cur) => {
            return acc + (alphabet[cur] === 0 ? 'a' : alphabet[cur]);
        }, 0);
        return isNaN(t) ? - 1 : t
    });
    return answer;
} 