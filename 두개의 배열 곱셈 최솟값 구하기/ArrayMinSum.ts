function solution(A,B){
    // 오름차순 배열
    let solutionA = A.sort((a,b) => a-b);
    // 내림차순 배열
    let solutionB = B.sort((a,b) => b-a);
    let sum = 0;
    solutionA.forEach((a, index) => {
        sum += solutionA[index] * solutionB[index]
    })
    return sum;
}

/**
 * 추가로 알게 된 것
 * sort 기본 옶션은 string 전용이다.
 */