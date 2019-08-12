// 最基本的字符|字符串匹配

const reg = new RegExp('the')

// 是否匹配
console.log(reg.test('I am the man'))
// 检索匹配，返回数组存放匹配结果
console.log(reg.exec('I am the man'))