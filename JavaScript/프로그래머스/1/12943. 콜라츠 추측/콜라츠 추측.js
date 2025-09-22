function solution(num) {
    let i = 0;
    while(true) {
        if(i === 500) {
            return -1
        } else {
            if(num === 1) {
                return i;
            }
            if(num % 2 === 0) {
                num = num / 2;
            } else {
                num = (num * 3) + 1;
            }
                        i++;
        }
    }
}