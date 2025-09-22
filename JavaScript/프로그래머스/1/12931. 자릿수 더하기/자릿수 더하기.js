function solution(n)
{
    return [...String(n)].reduce((a, b) =>  parseInt(a) + parseInt(b), 0);
}