function solution(cipher, code) {
    return     [...cipher].map((x, i) => {if((i+1) % code === 0) return x}).filter(x => x).join("");
}