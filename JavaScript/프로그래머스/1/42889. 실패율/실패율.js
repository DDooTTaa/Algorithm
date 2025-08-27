function solution(N, stages) {
    var answer = [];
    let totalPlayer = stages.length;

    for(let i=1; i <= N; i++) {
        let stayPlayers = stages.filter(stage => stage === i).length;
        let totalLate = stayPlayers  / totalPlayer;
        answer.push({'stage': i, rate: totalLate});
        totalPlayer-= stayPlayers;    
    }
    
    return answer.sort((a, b) => { return b.rate - a.rate}).map(x => x.stage);
}