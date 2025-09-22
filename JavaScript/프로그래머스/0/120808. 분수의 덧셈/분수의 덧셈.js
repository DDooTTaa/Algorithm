function gcd(a, b) {
    // 최대공약수를 계산하는 함수
    return b === 0 ? a : gcd(b, a % b);
}

function simplifyFraction(numerator, denominator) {
    // 최대공약수를 계산하여 분모와 분자를 나눕니다.
    const commonFactor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / commonFactor;
    const simplifiedDenominator = denominator / commonFactor;
    return [simplifiedNumerator, simplifiedDenominator];
}

function addFractions(numer1, denom1, numer2, denom2) {
    // 두 분수를 더하고 결과를 기약 분수로 만듭니다.
    const resultNumerator = numer1 * denom2 + numer2 * denom1;
    const resultDenominator = denom1 * denom2;
    return simplifyFraction(resultNumerator, resultDenominator);
}

function solution(numer1, denom1, numer2, denom2) {
    const [resultNumerator, resultDenominator] = addFractions(numer1, denom1, numer2, denom2);
    return [resultNumerator, resultDenominator];
}