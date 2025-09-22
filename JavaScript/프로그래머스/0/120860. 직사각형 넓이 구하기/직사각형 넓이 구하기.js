function solution(dots) {
    var base = dots[0];
    var w;
    var h;
    for(let i = 1; i < 4; i++) {
        if(dots[i][0] === base[0]) {
            w = Math.abs(base[1] - dots[i][1]);
        }
        if(dots[i][1] === base[1]) {
            h = Math.abs(base[0] - dots[i][0]);
        }
    }
    return w * h;
}