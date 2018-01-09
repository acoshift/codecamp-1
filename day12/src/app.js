const Koa = require('koa')
const DB = require('./lib/db')

module.exports = async function (config) {
  const db = await DB(config)

  const users = require('./model/user')(db)

  const app = new Koa()

  app.use(require('./ctrl/routes')(users))

  app.listen(3000)
}
