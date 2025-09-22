function solution(arr) {
    return (arr.reduce((prev, now) => { return now += prev }, 0)) / arr.length ;
}