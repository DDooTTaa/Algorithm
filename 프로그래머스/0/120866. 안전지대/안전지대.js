function solution(board) {
  // 위, 아래, 좌, 우, 대각선 칸 확인을 위한 셋팅입니다.
  const dx = [1, 0, -1, 0, 1, 1, -1, -1];
  const dy = [0, 1, 0, -1, 1, -1, 1, -1];

  // 정사각형이기 때문에 코드 간소화를위해 길이를 셋팅해줍니다.
  const n = board.length;

  // 초기 안대지대를 모든 칸으로 답을 설정해둡니다.
  let answer = n * n;

  // 지뢰가 있는 곳을 확인해주기 위한 셋팅입니다.
  const ch = [];

  // 이중 for문을 이용해 모든 칸을 확인해줍니다.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 지뢰를 발견했다면 ch에 그 칸의 위치를넣어줍니다.
        ch.push([i, j]);
        // 그리고 안전지대에서 -1을 해줍니다.
        answer--;
      }
    }
  }

  // 예시 3번 처럼 모든 지대가 지뢰지역이면 0을 반환합니다.
  if (answer === 0) return 0;

  // 위험지역 확인을 위해 지뢰의 위치를 forEach()메서드를 통해 확인해줍니다.
  ch.forEach((w) => {
    // 위, 아래, 좌, 우, 대각선 총 8곳의 위치를 확인합니다.
    for (let k = 0; k < 8; k++) {
      // 위에 설정해둔 dx와 dy를 활용합니다.
      // ex) 만안 w가 [0, 0]일 경우
      // w[0] + dx[0] = nx = 1
      // w[1] + dy[0] = ny = 0
      // 즉, 현재 위치의 board[nx][ny]는 현재 위치의 우측을 확인하는 것 입니다.
      const nx = w[0] + dx[k];
      const ny = w[1] + dy[k];

      // 만약 nx ny의 위치가 지대의 안쪽이고
      // 이미 확인한 위험지역이나 지뢰의 위치가 아니라면
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && board[nx][ny] === 0) {
        // 현재 위치를 위험지대로 설정하고
        board[nx][ny] = 1;
        // 안전지대 갯수에서 -1을 해줍니다.
        answer--;
      }
    }
  });

  // 최종 확인 결과를 반환해줍니다.
  return answer;
}