const solution = (elements) => {
    const map = new Set();
    
    const len = elements.length;
    for (let i = 1; i <= len; i++) {
        let sum = 0;
        for (let j = 0; j < len; j++) {
            if (j === 0) { // 최초 한 번의 합 구하기
                for (let k=0; k<i; k++) {
                    sum += elements[k];
                }
            }
            else { // 이후 값은 이전에 구한 합을 활용하기
                sum -= elements[j-1];
                sum += elements[(j+i-1) % len];
            }
            map.add(sum);
        }
    }
    return map.size;
}