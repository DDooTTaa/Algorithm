function solution(n, computers) {
  const visited = Array(n).fill(false);
  let count = 0;

  function dfs(i) {
    visited[i] = true;
    for (let j = 0; j < n; j++) {
      // 연결되어 있고 아직 방문하지 않은 컴퓨터 탐색
      if (computers[i][j] === 1 && !visited[j]) {
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}