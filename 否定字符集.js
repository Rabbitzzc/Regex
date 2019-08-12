// [^]表示否定

const reg = new RegExp('[^c]ar')
const str = 'The car parked in the garage.'

console.log(reg.test(str))
console.log(reg.exec(str))