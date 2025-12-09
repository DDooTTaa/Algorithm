  function solution(x, y, n) {
    if (x === y) return 0;

    let temp = [x];
    let count = 0;
    const visited = new Set([x]);

    while (temp.length > 0) {
      count++;
      const newTemp = [];

      for (const t of temp) {
        const nexts = [t + n, t * 2, t * 3];

        for (const v of nexts) {
          if (v > y) continue;
          if (visited.has(v)) continue;

          if (v === y) return count;

          visited.add(v);
          newTemp.push(v);
        }
      }

      temp = newTemp;
    }
    return -1;
  }
  
