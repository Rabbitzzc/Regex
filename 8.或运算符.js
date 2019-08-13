// 使用 | 表示或
const reg = new RegExp('(T|t)he|car')
const str = 'The car parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))