const fs = require('fs')
const http = require('http')
http.createServer((request, response) => {
  // console.log('request', getPrototypChain(response))
  // response.end('hello world') // 好理解吗


  const { url, method, headers } = request
  console.log(url)
  if (url === '/' && method === 'GET') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        response.writeHead(500, {
          'Content-Type': 'text/plain;charset=utf-8'
        })
        response.end('500 服务器挂')
      }
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/html')
      response.end(data)
    })
  }
  else if (url === '/user' && method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ name: 'hcy' }))
  }
  else if (method === 'GET' && headers.accept.indexOf('image/*')) {
    fs.createReadStream('.' + url).pipe(response)
  }
  else {
    response.statusCode = 400
    response.setHeader('Content-Type', 'text/plain;charset=utf-8')
    response.end('404 没有了')
  }

}).listen(5001, () => {
  console.log('server is ok')
})

function getPrototypChain (obj) {
  const protoChain = []
  while (obj = Object.getPrototypeOf(obj)) {
    protoChain.push(obj)
  }
  return protoChain
}