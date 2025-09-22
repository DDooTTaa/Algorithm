function solution(brown, yellow) {
    for(let h = 3; h <= brown; h++) {
        if((brown + yellow) % h === 0) {
            let w = (brown + yellow) / h;            
            //태두리 빼고 곱셈
            if( (h - 2) * (w - 2) === yellow) {
                return [w, h];
            }
        }
    }
}