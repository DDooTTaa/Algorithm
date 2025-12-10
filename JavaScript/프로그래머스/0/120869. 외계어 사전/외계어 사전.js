function solution(spell, dic) {
    var a = dic.map(x => {
        return [...x].sort().join('');
    })
    var b = [...spell].sort().join('');
    if(a.includes(b)) {
        return 1
    } else {
    return 2;        
    }
}