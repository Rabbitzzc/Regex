// 贪婪匹配和惰性匹配

// 贪婪匹配
console.log(/(.*at)/.exec('The fat cat sat on the mat.'))

// 惰性匹配
console.log(/(.*?at)/.exec('The fat cat sat on the mat.'))
