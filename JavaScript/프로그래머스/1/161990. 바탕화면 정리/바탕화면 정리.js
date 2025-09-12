function solution(wallpaper) {
    var answer = [];
    let firstX = -1;
    let firstY = 50;
    let lastX = -1;
    let lastY = -1;
    
    for(let [i, x] of wallpaper.entries()) {
        for(let [j, y] of [...x].entries()) {
            if(y == '#' && firstX == -1) {
                firstX = i;
            }
            if(y == '#' && firstY > j) {
                firstY = j;
            }
            if(y == '#' && lastX < i + 1) {
                lastX = i + 1;
            }
            if(y == '#' && lastY < j + 1) {
                lastY = j + 1;
            }
        }
    }
    return [firstX, firstY, lastX, lastY];
}