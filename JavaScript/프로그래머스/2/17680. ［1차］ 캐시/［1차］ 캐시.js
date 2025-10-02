function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5; // 캐시 크기가 0이면 전부 miss

  let cache = [];
  let time = 0;

  cities.forEach(city => {
    city = city.toLowerCase();

    let idx = cache.indexOf(city);

    if (idx !== -1) {
      // cache hit
      cache.splice(idx, 1);   // 기존 위치에서 제거
      cache.push(city);       // 최신으로 다시 넣기
      time += 1;
    } else {
      // cache miss
      if (cache.length >= cacheSize) {
        cache.shift();        // 가장 오래된 거 제거
      }
      cache.push(city);
      time += 5;
    }
  });

  return time;
}