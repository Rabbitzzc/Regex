// . 点运算符的匹配，匹配任意单个字符

const reg = new RegExp('.ar')
const str = 'The car parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))