function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const weights = [781, 156, 31, 6, 1];
    // 가중치가 마지막은 1이고, 5를 더하고, 5의 제곱을 더하고, 5의 세제곱을 더하고...
    let answer = 0;

    for (let i = 0; i < word.length; i++) {
      const idx = vowels.indexOf(word[i]);
      answer += idx * weights[i] + 1;
    }

    return answer;
}