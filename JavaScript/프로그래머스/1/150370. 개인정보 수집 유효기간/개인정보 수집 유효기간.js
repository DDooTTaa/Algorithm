function solution(today, terms, privacies) {
    var answer = [];
    var termsObj = {};
    terms.forEach(x => {
        let [key, value] = x.split(' ');
        termsObj[key] = Number(value); // 숫자로 변환해두는 게 편함
    });
    var ans = privacies.map(x => {
        let [day, priv] = x.split(' ');
        return calendarToNum(day) + (termsObj[priv] * 28);
    });
    console.log(ans);
    return ans.map((x, i) => x <= calendarToNum(today) ? i + 1 : null).filter(x=> x);
}

function calendarToNum(day) {
    let dayArr = day.split('.');
    let year = (Number(dayArr[0]) - 2000) * 28 * 12;
    let mon = Number(dayArr[1]) * 28;
    let num = Number(dayArr[2]);
    return year + mon + num
}