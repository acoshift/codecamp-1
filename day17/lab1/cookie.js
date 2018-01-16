const Koa = require('koa')

new Koa()
  .use((ctx) => {
    let cnt = +ctx.cookies.get('cnt') || 0
    ctx.cookies.set('cnt', ++cnt)

    ctx.body = { cnt }
  })
  .listen(3000)
