// 通过()表示一组字符串
// 使用(|)与[]类似
const reg = new RegExp('(c|g|p)ar')
const str = 'The car is parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))