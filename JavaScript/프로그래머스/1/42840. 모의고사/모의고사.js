  function solution(answers) {
    var answer = [];
    const sufo1 = [1, 2, 3, 4, 5]; // 5
    const sufo2 = [2, 1, 2, 3, 2, 4, 2, 5] // 8;
    const sufo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] // 10;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    answers.forEach((item, index) => {
      if (item === sufo1[index % sufo1.length]) {
        count1++;
      }
      if (item === sufo2[index % sufo2.length]) {
        count2++;
      }
      if (item === sufo3[index % sufo3.length]) {
        count3++;
      }
    });
    if (count1 >= count2 && count1 >= count3) {
      answer.push(1);
    }
    if (count2 >= count1 && count2 >= count3) {
      answer.push(2);
    }
    if (count3 >= count1 && count3 >= count2) {
      answer.push(3);
    }
    return answer;
  }