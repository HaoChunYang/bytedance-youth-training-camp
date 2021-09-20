const http = require('http')

const sesseion = {}

http.createServer((req, res) => {
  console.log('cookie:', req.headers.cookie)

  res.setHeader('Set-Cookie', `abc=123;`)
  res.end('Hi')
}).listen(5001, () => {
  console.log('sever is running on 5001')
})