
const oddEven = require("./oddEven.js");
const binary = require("../이진탐색트리/binary.js");

it('짝수 홀수 테스트', () => {
    expect(oddEven.solution(7)).toBe("Odd");
});

describe('멋쟁이 테스트 그룹', () => {
    it('짝수 홀수 테스트', () => {
        expect(oddEven.solution(7)).toBe("Odd");
    });

    it('이진 탐색 테스트', () => {
        expect(binary.binarySearch([1,4,6,9,100,200], 9)).toBe(3);
    });
});