const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.from('a')
console.log(buf2)

const buf3 = Buffer.from('郝') // <Buffer e4 b8 ad> 三个字符
console.log(buf3)

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString())