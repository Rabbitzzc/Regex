// 使用 \ 来指定特殊字符
const reg = new RegExp('(f|c|m)at\.?')
const str = 'The fat cat sat on the mat.'

console.log(reg.test(str))
console.log(reg.exec(str))