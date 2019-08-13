// ?<! 负后发断言

const reg = new RegExp('(?<![T|t]he\\s)cat')
const str = 'The cat sat on cat.'

console.log(reg.test(str))
console.log(reg.exec(str))
