// 使用大括号{}表示前面字符重复次数
// {min.max?} min必须，max可选，分别表示最小次数和最多次数
const reg = new RegExp('[0-9]{2,3}')
const str = 'The number was 9.9997 but we rounded it off to 10.0.'

console.log(reg.test(str))
console.log(reg.exec(str))