function solution(str_list) {
    var rLen = str_list.indexOf('r');
    var lLen = str_list.indexOf('l');

    if (rLen === -1 && lLen === -1) return []; // 둘 다 없을 때 빈 배열 반환

    if (rLen !== -1 && (lLen === -1 || rLen < lLen)) {
        return str_list.filter((x, i) => i > rLen);
    } else if (lLen !== -1) {
        return str_list.filter((x, i) => i < lLen);
    }

    return [];
}