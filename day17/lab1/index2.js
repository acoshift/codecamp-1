const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const bcrypt = require('bcrypt')

const app = new Koa()

app.use(bodyParser())
app.use(async (ctx, next) => {
  ctx.$$$throw = ctx.throw
  ctx.throw = function (code, obj) {
    ctx.status = code
    ctx.body = obj
    throw new Error('')
  }
  try {
    next()
  } catch (err) {
    console.error(err)
  }
})

app.use(async (ctx) => {
  const { password } = ctx.request.body
  if (!password) {
    ctx.throw(400, { error: 'bad request' })
  }

  const hash = await bcrypt.hash(password, 10)
  ctx.body = { hash }
})

app.listen(3000)
