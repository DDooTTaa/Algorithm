function solution(clothes) {
    let map = {};
    var answer = 1;
    clothes.forEach(x => {
      if (!map[x[1]]) {
        map = { ...map, [x[1]]: 1 }
      } else {
        map[x[1]]++;
      }
    });
    let values = Object.values(map);
    values.forEach(x => {
      answer *= (x + 1);
    })
    return answer - 1;
}