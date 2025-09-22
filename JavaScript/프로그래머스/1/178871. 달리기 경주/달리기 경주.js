function solution(players, callings) {
    const playerMap = new Map();
    players.forEach((x, idx) => {
        playerMap.set(x, idx);
    })
    callings.forEach((v, idx) => {
        playerMap.set(v, playerMap.get(v) - 1);
        playerMap.set(players[playerMap.get(v)], playerMap.get(v) + 1);
        const tmp = players[playerMap.get(v) + 1];
        players[playerMap.get(v) + 1] = players[playerMap.get(v)];
        players[playerMap.get(v)] = tmp;
    });
    return players;
}