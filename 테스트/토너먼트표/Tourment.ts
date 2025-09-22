function solution(n,a,b)
{
    let answer = 0;
    let numA = a;
    let numB = b;

    while(numA !== numB) {
        numA = Math.ceil(numA / 2);
        numB = Math.ceil(numB / 2);
        answer++;
    }

    return answer;
}

/**
 * 추가로 알게 된 것
 * 인트형에 toString(2) 을 하면 이진수가 된다
 */