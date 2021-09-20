const fs = require('fs')

// // 同步读取
// // 二进制文件 图片 视频
const data = fs.readFileSync('./01.md')
console.log('data', data.toString())

// promise api async/await

fs.readFile('./01.md', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString())
})

