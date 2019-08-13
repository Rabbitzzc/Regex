// ?! 负先行断言
// 用户筛选匹配结果


// 筛选*he后面不是空格fat的字符
const reg = new RegExp('(T|t)he(?!\\sfat)')
const str = 'The fat cat sat on the mat.'

console.log(reg.test(str))
console.log(reg.exec(str))
