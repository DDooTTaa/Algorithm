function solution(new_id) {
    var answer = '';
    let idArr = [...new_id.toLowerCase()];
    var idArr2 = idArr.filter(x => {
        if(!isNaN(x) || x == '-' || x == '_' || x == '.' || (x.charCodeAt() > 96 && x.charCodeAt() < 123)) {
            return true;
        } else {
            return false;
        }
    });
    var idArr3 = idArr2.filter((x, i) => {
        if(!(idArr2[i - 1] && idArr2[i - 1] == x && x == '.') && 
           !(i == 0 && x == '.')) {
            return true;
        }
    })
    if (idArr3.length == 0 ) idArr3.push('a');
    if (idArr3.length >= 16) idArr3 = idArr3.slice(0, 15);
    if (idArr3[idArr3.length - 1] === '.') idArr3.pop();
    if (idArr3.length <= 2) idArr3.push(idArr3[idArr3.length - 1]);
    if (idArr3.length <= 2) idArr3.push(idArr3[idArr3.length - 1]);
    return idArr3.join('');
}