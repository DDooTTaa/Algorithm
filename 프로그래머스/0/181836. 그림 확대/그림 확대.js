function solution(picture, k) {
    var t = picture.map(x => {
        return ([...x].map(y => y.repeat(k)).join(''))
    });
    var o = [];
    t.forEach(x => {
        for(let i = 0; i < k; i++) {
            o.push(x);            
        }
    })
    return o;
}