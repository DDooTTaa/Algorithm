function solution(id_list, report, k) {
    var obj = {};
    var numberMap = {};
    var stack = [];
    id_list.forEach(x => {
        obj[x] = [];
        numberMap[x] = 0;
    });
    report.forEach(y => {
        let [call, receiver] = y.split(' ');
        if(!obj[call].includes(receiver)) {
            obj[call].push(receiver);
        }
    });
    id_list.forEach(x => {
        obj[x].forEach(y => {
            numberMap[y]++;
            if(numberMap[y] == k) {
                stack.push(y);
            }
        })
    });
    const t = id_list.map(x => {
        let a = 0;
        stack.forEach(y => {
            if(obj[x].includes(y)) {
                a++
            };
        });
         return a;
    })
    return t;
}