const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')

const app = new Koa()

app.use(bodyParser())

app.use(async (ctx) => {
  const { password } = ctx.request.body
  if (!password) {
    ctx.throw(400)
  }

  const hash = await bcrypt.hash(password, 10)
  ctx.body = { hash }
})

app.listen(3000)
