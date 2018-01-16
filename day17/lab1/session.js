const Koa = require('koa')
const session = require('koa-session')

const sessionStore = {}

const sessionConfig = {
  key: 'sess',
  maxAge: 3600 * 1000,
  httpOnly: true,
  store: {
    get (key, maxAge, { rolling }) {
      return sessionStore[key]
    },
    set (key, sess, maxAge, { rolling }) {
      sessionStore[key] = sess
    },
    destroy (key) {
      delete sessionStore[key]
    }
  }
}

const app = new Koa()

app.keys = ['supersecret']

app
  .use(session(sessionConfig, app))
  .use(handler)
  .listen(3000)

function handler (ctx) {
  let n = ctx.session.views || 0
  ctx.session.views = ++n
  ctx.body = `${n} views`
}