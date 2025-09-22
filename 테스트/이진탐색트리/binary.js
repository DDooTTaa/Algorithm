function solution(list, num) {
    return list.findIndex(x => x === num);
}

function binarySearch(list, num) {
    let left = 0;
    let right = list.length - 1;
    let mid = 0;

    while (left <= right) {

        mid = parseInt((left + right) / 2)

        if (num === list[mid]) {
            return mid;
        } else {
            if (num < list[mid]) {
                right = mid - 1
            }
            else {
                left = mid + 1
            }
        }
    }
}

module.exports = {
    binarySearch
}