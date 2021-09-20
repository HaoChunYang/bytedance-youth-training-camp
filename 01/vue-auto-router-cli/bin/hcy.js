#!/usr/bin/env node
const program = require('commander')
// 策略模式
program.version(require('../package.json').version)
program.command('init <name>')
  .description('init project')
  .action(require('../lib/init.js'))
// .action(name => {
//   console.log('init ' + name)
// })

program.command('refresh')
  .description('refresh routers')
  .action(require('../lib/refresh'))

program.parse(process.argv)
console.log('hello cli')

// 命令行界面
console.log(process.argv)