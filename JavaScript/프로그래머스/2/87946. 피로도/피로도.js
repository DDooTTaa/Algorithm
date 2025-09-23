function solution(k, dungeons) {
    let visited = Array(dungeons.length).fill(false);
    let answer = 0;

    function dfs(k, count) {
      answer = Math.max(answer, count);
      for (let i = 0; i < dungeons.length; i++) {
        let [need, use] = dungeons[i];
        if (!visited[i] && k >= need) {
          visited[i] = true;
          dfs(k - use, count + 1);
          visited[i] = false;
        }
      }
    }

    dfs(k, 0);
    return answer;
}