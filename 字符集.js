// 字符集，通过中括号(方括号来表示)
const reg = new RegExp('[Tt]he')
const str = 'The car parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))

// 中括号内部的. 如ar[.] 表示的就是. 匹配ar.
const reg1 = new RegExp('ar[.]')
const str1 = 'A garage is a good place to park a car.'

console.log(reg1.test(str1))
console.log(reg1.exec(str1))