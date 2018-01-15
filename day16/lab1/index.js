const Koa = require('koa')

const app = new Koa()
app.use(requestLogger)
app.use(errorRecovery)
app.use(handler)
app.listen(3000)

async function handler (ctx) {
  ctx.body = 'hello, koa'
  throw 'error :P'
}

async function requestLogger (ctx, next) {
  await next()
  console.log(`${ctx.method} ${ctx.status} ${ctx.path}`)
}

async function errorRecovery (ctx, next) {
  try {
    await next()
  } catch (err) {
    console.log('Server Error: ' + err)
    ctx.status = 500
    ctx.body = 'Error :PPPP'
  }
}
