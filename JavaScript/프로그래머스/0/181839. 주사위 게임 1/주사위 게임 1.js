function solution(a, b) {
    var answer = 0;
    if((a + b) % 2 == 0) {
        if(a % 2 != 0) {
            return (a * a) + (b * b)
        } else {
            return Math.abs(a - b)
        }        
    } else {
        return (2 * (a + b))
    }
}