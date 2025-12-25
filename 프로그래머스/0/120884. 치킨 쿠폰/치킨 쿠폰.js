function solution(chicken) {
    var answer = 0;
    var rest = 0;
    while(chicken >= 10) {
        var k =  Math.floor(chicken / 10);
        answer+= k;
        chicken = k + (chicken %  10);
    }
    return answer;
}