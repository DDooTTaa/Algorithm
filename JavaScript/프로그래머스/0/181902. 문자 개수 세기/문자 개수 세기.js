function solution(my_string) {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return [...alpha].map(x => {
      var count = 0;
      [...my_string].forEach(y => {
        if (y == x) {
          count++;
        }
      })
      return count;
    });
}