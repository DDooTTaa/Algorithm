function solution(bandage, health, attacks) {
    var answer = 0;
    var totalTime = attacks[attacks.length - 1][0];
    var multi = 0;
    var cur = health;
    var attackArr = Array(totalTime).fill(0);
    for(let i = 0; i <= totalTime; i++) {
        if(attacks[i] && attacks[i][0]) {
        attackArr[attacks[i][0]] = attacks[i][1];            
        }
    }
    console.log(attackArr)
    for(let i = 1; i <= totalTime; i++) {
        if(cur <= 0) {
            return -1;
        } else {
            if(attackArr[i] !== 0) {
                multi = 0;
                cur -= attackArr[i];
            } else {
                multi++;
                cur+= bandage[1];
                if(multi == bandage[0]) {
                    cur+=bandage[2];
                    multi = 0;
                }                           
            }
        }
        //
        if(cur > health) {
            cur = health;
        }
    }
    return cur <= 0 ? -1 : cur;
}