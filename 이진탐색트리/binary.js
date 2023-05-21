function solution(list, num) {
    return list.findIndex(x => x === num);
}

function binarySearch(list, num) {
    let left = 0;
    let right = list.length-1;
    let mid = 0;

    while(left<=right){

        mid = parseInt((left+right)/2)

        if(num === list[mid]) {
            return mid;
        } else{
            if(num < list[mid]) {
                right = mid-1
            }
            else{
                left = mid+1
            }
        }
    }
}

module.exports = {
    binarySearch
}

/**
https://velog.io/@kong_woon/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-%EC%9D%B4%EC%A7%84%ED%83%90%EC%83%89%ED%8A%B8%EB%A6%AC
**/