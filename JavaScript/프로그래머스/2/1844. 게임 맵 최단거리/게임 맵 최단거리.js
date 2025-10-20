function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
    const dy = [0, 0, -1, 1];
    const queue = [[0, 0, 1]]; // [x, y, 총 거리]
    visited[0][0] = true;

    while (queue.length) {
      const [x, y, dist] = queue.shift();
      if (x === n - 1 && y === m - 1) return dist;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= 0 && nx < n &&
          ny >= 0 && ny < m &&
          maps[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
    return -1;
}