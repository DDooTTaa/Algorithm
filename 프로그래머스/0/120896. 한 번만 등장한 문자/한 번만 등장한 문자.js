function solution(s) {
    var res = [];
    [...s].forEach(item => {
                if(s.indexOf(item) === s.lastIndexOf(item)){
            res.push(item);
                }
    });
    return res.sort().join("");
}