function solution(A,B){
    let solutionA = A.sort((a,b) => a-b);
    let solutionB = B.sort((a,b) => b-a);
    let sum = 0;
    solutionA.forEach((a, index) => {
        sum += solutionA[index] * solutionB[index]
    })
    return sum;
}