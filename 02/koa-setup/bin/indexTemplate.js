import ejs from 'ejs'
import fs from 'fs'

import prettier from 'prettier'

import { fileURLToPath } from 'url'
import path from 'path'

export function createIndexTemplate (config) {

  const __dirname = fileURLToPath(import.meta.url)

  const template = fs.readFileSync(path.resolve(__dirname, '../template/index.ejs'), 'utf-8')

  // const template = fs.readFileSync('./template/index.ejs', 'utf-8')

  const code = ejs.render(template, {
    router: config.middleware.router,
    static: config.middleware.static,
    port: config.port
  })

  // console.log(code)

  return prettier.format(code, {
    parser: 'babel'
  })
}
