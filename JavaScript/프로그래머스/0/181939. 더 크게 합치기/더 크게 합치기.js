function solution(a, b) {
    return Number([...String(a), ...String(b)].join('')) >=  Number([...String(b), ...String(a)].join('')) ? Number([...String(a), ...String(b)].join('')) : Number([...String(b), ...String(a)].join(''));
}