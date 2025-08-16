function solution(sizes) {
    let sizeX = [0, 0];
    let sizeY = [0, 0];
    sizes.forEach(size => {
        size.sort((a, b) => a - b);
        sizeX = sizeX[0] > size[0] ? sizeX : size
        sizeY = sizeY[1] > size[1] ? sizeY : size
    });
    console.log(sizeX, sizeY)
    sizes.forEach(size => {
        if(sizeX[0] > sizeY[1]) {
            if(sizeX[1] > sizeY[0]) {
                console.log(size);
            }
        } else {
            if(sizeY[0] > sizeX[1]) {
                console.log(size);
            }
        }
    })
    return sizeX[0] * sizeY[1];
}