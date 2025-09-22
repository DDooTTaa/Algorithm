function solution(citations) {
    let h = citations.length + 1;
    let count = 0;
    while(h--) {
        count = 0;
        citations.forEach(x => {
            if(h <= x) {
                count++;
            }
        })
        if(count >= h) {
            return h;
        } 
    }
}