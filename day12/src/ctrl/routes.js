module.exports = function (users) {
  return async (ctx) => {
    const us = await users.getAll()
    ctx.set({
      'content-type': 'text/html; charset=utf-8'
    })
    ctx.body = `
      <!doctype html>
      <ul>
    ` + us.reduce((p, v) => p + `<li>(${v.id}) ${v.firstName} ${v.lastName}`, '')
  }
}
