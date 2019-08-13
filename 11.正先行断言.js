// ?= 正先行断言。用于判断存在，包含


// 关于js后行断言支持问题，参考http://es6.ruanyifeng.com/#docs/regex#%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80

// 判断he后面跟着空格fat
// # 注意在js中，\需要转义字符，所以使用js正则对象需要两个"\\"
const reg = new RegExp('(T|t)he(?=\\sfat)',)
const str = 'The fat cat sat on the mat.'

console.log(reg.test(str))
console.log(reg.exec(str))
console.log(/(T|t)he(?=\sfat)/.exec(str))
