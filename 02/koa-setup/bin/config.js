export function createConfig (answer) {
  const haveMiddleware = function (name) {
    return answer.middleware.indexOf(name) !== -1
  }
  return {
    packageName: answer.packageName,
    port: answer.port,
    middleware: {
      router: haveMiddleware("koaRouter"),
      static: haveMiddleware("koaStatic")
    }
  }
}