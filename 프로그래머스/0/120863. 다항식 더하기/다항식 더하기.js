function solution(code) {
  const arr = code.split(' ')
  const obj = {
    num:0,
  };
  if(code.length === 0) return '';
  arr.forEach((e,i)=>{
    if(i%2 === 0) {
      NumberAndAlphabet(e)
    } else {
      cal = e
    }
  })
  function NumberAndAlphabet(str){
    if(isNaN(Number(str))) {
      if(isNaN(Number(str[0]))) {
        if(obj[str[str.length-1]]) {
          obj[str[str.length-1]]++
        }
        else obj[str[str.length-1]] = 1
      } else {
        if(obj[str[str.length-1]]) {
          obj[str[str.length-1]] += Number(str.slice(0,str.length-1))
        }
        else obj[str[str.length-1]] = Number(str.slice(0,str.length-1))
      }
    } else {
      obj['num'] += Number(str)
    }
  }
  if(Object.keys(obj).filter(e => e !== 'num').length === 0) return obj['num'].toString()
  else if(obj['num'] === 0 && Object.keys(obj).filter(e => e !== 'num').length !== 0) {
    const num = obj[Object.keys(obj).filter(e => e !== 'num')[0]].toString() === '1' ? '' : obj[Object.keys(obj).filter(e => e !== 'num')[0]]
    return num + Object.keys(obj).filter(e => e !== 'num')[0]
  }
  else {
    const num = obj[Object.keys(obj).filter(e => e !== 'num')[0]].toString() === '1' ? '' : obj[Object.keys(obj).filter(e => e !== 'num')[0]]
    return num + Object.keys(obj).filter(e => e !== 'num')[0] + ' + ' + obj['num']
  }
}