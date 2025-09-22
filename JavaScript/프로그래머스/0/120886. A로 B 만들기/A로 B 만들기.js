function solution(before, after) {
    return JSON.stringify([...after].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) == JSON.stringify([...before].sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) ? 1 : 0;
}