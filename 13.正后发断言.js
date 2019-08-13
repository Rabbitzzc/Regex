// ?<= 正后发断言 判断存在所有匹配结果, ()xxxxx
/**
 * JavaScript 语言的正则表达式，只支持先行断言（lookahead）和先行否定断言
 * 不支持后行断言（lookbehind）和后行否定断言
 * ES2018 引入后行断言 V8 引擎 4.9 版 chrome62已经支持
 * 使用命令查看  process.versions 查看node版本比如我是6.8xxx
 */


const reg = new RegExp('(?<=(T|t)he\\s)(fat|mat)')
const str = 'The fat cat sat on the mat.'

console.log(reg.test(str))
console.log(reg.exec(str))
