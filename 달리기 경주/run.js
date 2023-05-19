/**
 * 시간 초과로 타임 아웃이 나는 코드 test
 */
function solution(players, callings) {
    callings.forEach(v => {
        const findPlayer = players.findIndex(p => p === v);
        const tmp = players[findPlayer];
        players[findPlayer] = players[findPlayer - 1];
        players[findPlayer - 1] = tmp;
    });
    return players;
}

/**
 *  map을 이용한 풀이
 */

function solution(players, callings) {
    const playerMap = new Map();
    players.forEach((x, idx) => {
        playerMap.set(x, idx);
    })
    callings.forEach(v => {
        playerMap.set(v, playerMap.get(v) - 1);
        playerMap.set(players[playerMap.get(v)], playerMap.get(v) + 1);
        const tmp = players[playerMap.get(v) + 1];
        players[playerMap.get(v) + 1] = players[playerMap.get(v)];
        players[playerMap.get(v)] = tmp;
    });
    return players;
}