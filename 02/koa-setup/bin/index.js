#!/usr/bin/env node
// esm
import fs from 'fs'
import { createIndexTemplate } from './indexTemplate.js'
import { createPackageTemplate } from './packageTemplate.js'

import { question } from './question/index.js'
import { createConfig } from './config.js'
import execa from 'execa'

(async () => {
  const answer = await question()
  console.log(answer)
  const inputConfig = createConfig(answer)

  fs.mkdirSync(getRootPath())

  fs.writeFileSync(getRootPath() + '/index.js', createIndexTemplate(inputConfig))

  fs.writeFileSync(getRootPath() + '/package.json', createPackageTemplate(inputConfig))

  // TODO package -> npm install
  execa('yarn', {
    cwd: getRootPath(),
    stdio: [2, 2, 2]
  })

  function getRootPath () {
    return `./${inputConfig.packageName}`
  }
})()
