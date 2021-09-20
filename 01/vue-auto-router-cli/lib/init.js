// 打印欢迎界面

const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')

const chalk = require('chalk')
const log = content => console.log(chalk.red(content))
const { clone } = require('./download')
// const { spawn } = require('child_process')
// const { resolve } = require('path')

const open = require('open')
figlet.text('bugu!', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true
}, function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  log(data);
});

require('child_process')

const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
module.exports = async name => {
  clear()
  const data = await figlet('hao cy')
  log(data)

  // 项目模板
  log('创建项目 ' + name)
  await clone('github:su37josephxia/vue-template', name)

  // 下载依赖
  // 子进程
  spawn('npm', ['install'])
  // 同步 promiseapi
  // 输出流  子进程  合并到 主进程
  log('安装依赖')
  await spawn('npm', ['install'], { cwd: `./${name}` })

  log(chalk.green('done'))

  open("http://localhost:8080")
  await spawn('npm', ['run', 'serve'], { cwd: `./${name}` })
}