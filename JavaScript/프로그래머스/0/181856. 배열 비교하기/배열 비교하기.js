function solution(arr1, arr2) {
    if(arr1.length > arr2.length) {
        return 1;
    } else if(arr2.length > arr1.length) {
        return -1;
    } else {
        let arr1Total = arr1.reduce((a, c) => c+=a, 0);
        let arr2Total = arr2.reduce((a, c) => c+=a, 0);
        if(arr1Total == arr2Total) {
            return 0
        } else if(arr1Total > arr2Total) {
            return 1;
        } else {
            return -1;
        }
    }
}