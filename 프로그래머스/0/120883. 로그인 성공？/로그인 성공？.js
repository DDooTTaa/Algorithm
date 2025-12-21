function solution(id_pw, db) {
    var answer = 'fail';
    db.forEach(x => {
        if(id_pw[0] == x[0]) {
            if(id_pw[1] == x[1]) {
                answer = 'login'
            } else {
    answer = 'wrong pw'
            }
        }        
    })
    return answer;
}