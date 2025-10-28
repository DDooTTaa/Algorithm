function solution(dirs) {
    const move = {
      U: [0, 1],
      D: [0, -1],
      R: [1, 0],
      L: [-1, 0],
    };

    const visited = new Set();
    let x = 0, y = 0;

    for (const d of dirs) {
      const [dx, dy] = move[d];
      const nx = x + dx;
      const ny = y + dy;

      // 경계 벗어나면 무시
      if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

      // 경로를 문자열로 저장
      const path1 = `${x}${y}->${nx}${ny}`;
      const path2 = `${nx}${ny}->${x}${y}`;
      visited.add(path1);
      visited.add(path2);

      x = nx;
      y = ny;
    }
    return visited.size / 2;
}
