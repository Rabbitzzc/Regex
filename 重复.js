// +  * ? 匹配
// + >=1
// * >= 0
// ? 0 | 1

// 小写字母组成的字符串
const reg = new RegExp('[a-z]*')
const str = 'The car parked in the gArage #21.'

console.log(reg.test(str))
console.log(reg.exec(str))

// 任意非空字符串在中间
const reg1 = new RegExp('c.+t')
const str1 = 'The fat cat sat on the mat.'

console.log(reg1.test(str1))
console.log(reg1.exec(str1))

// 匹配he she
const reg2 = new RegExp('[s]?he')
const str2 = 'she and he have the car.'

console.log(reg2.test(str2))
console.log(reg2.exec(str2))