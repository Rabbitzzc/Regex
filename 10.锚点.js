// ^表示开始， $表示结束

// ^
const reg = new RegExp('^(T|t)he')
const str = 'The car parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))

// $
const reg1 = new RegExp('(at\.)$')
const str1 = 'The fat cat. sat. on the mat.'

console.log(reg1.test(str1))
console.log(reg1.exec(str1))