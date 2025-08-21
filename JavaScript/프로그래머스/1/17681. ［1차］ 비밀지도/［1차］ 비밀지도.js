function solution(n, arr1, arr2) {
    var answer = Array.from({ length: n }, () => Array(n).fill(0));;
    const stack = [];
    const stack2 = [];
    arr1.forEach((x, i) => {
        stack.push(x.toString(2).padStart(n, '0').split(''));
        stack2.push(arr2[i].toString(2).padStart(n, '0').split(''));
    });
    stack.forEach((x,i) => {
      x.forEach((y, j) => {
         answer[i][j] = (+y || +stack2[i][j] ? '#' : ' ');
      })  
    })
    return answer.map(x => x.join(''));
}