const Koa = require('koa')
const bcrypt = require('bcrypt')

const app = new Koa()

app.use(async (ctx, next) => {
  let buf

  ctx.req.on('data', (data) => {
    if (!buf) {
      buf = data
      return
    }
    buf += data
  })

  await new Promise(ctx.req.on.bind(ctx.req, 'end'))
  const body = JSON.parse(buf)
  ctx.request.body = body

  await next()
})

app.use(async (ctx) => {
  const { password } = ctx.request.body
  if (!password) {
    ctx.throw(400)
  }

  const hash = await bcrypt.hash(password, 10)
  ctx.body = { hash }
})

app.listen(3000)
