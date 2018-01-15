const _ = require('lodash')

function list (ctx) {

}

function create (ctx) {
  let { text } = ctx.request.body

  if (!_.isString(text)) {
    ctx.status = 400
    ctx.body = {
      error: 'text must be string'
    }
    return
  }

  text = text.trim()
  if (text.length === 0 || text.length > 200) {
    ctx.status = 400
    ctx.body = {
      error: 'text length must be 1 to 200'
    }
    return
  }

  // create todo from text
  ctx.body = {
    ok: 1
  }
}

function get (ctx) {
  const id = ctx.params.id
  ctx.body = { id }
}

function update (ctx) {

}

function remove (ctx) {

}

function complete (ctx) {

}

function incomplete (ctx) {

}

module.exports = {
  list,
  create,
  get,
  update,
  remove,
  complete,
  incomplete
}
