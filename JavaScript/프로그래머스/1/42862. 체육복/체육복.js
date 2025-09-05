// 자기가 여벌을 가지고 있는 경우를 생각 못했다. 유-감.
function solution(n, lost, reserve) {
  let realLost = lost.filter(x => !reserve.includes(x)).sort((a,b)=>a-b);
  let realReserve = reserve.filter(x => !lost.includes(x)).sort((a,b)=>a-b);

  let cannotBorrow = 0;
  realLost.forEach(a => {
    const idx = realReserve.findIndex(r => Math.abs(r - a) <= 1);
    if (idx === -1) {
      cannotBorrow++;
    } else {
      realReserve.splice(idx, 1);
    }
  });

  return n - cannotBorrow;
}
