// 使用 i g m标志


// 大小写忽略
const reg = new RegExp('The', 'gi')
const str = 'The fat cat sat on the mat.'

console.log(reg.test(str))
console.log(reg.exec(str))
console.log(/The/ig.exec(str))

// 全局搜索
const reg1 = new RegExp('.(at)', 'g')
const str1 = 'The fat cat sat on the mat.'

console.log(reg1.test(str1))
console.log(reg1.exec(str1))