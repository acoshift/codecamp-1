module.exports = function (pool, repo) {
  return {
    async list (ctx) {
      ctx.body = await repo.list(pool)
    },
    async create (ctx) {
      const todo = ctx.request.body
      // TODO: validate todo
      const id = await repo.create(pool, todo)
      ctx.body = { id }
    },
    async get (ctx) {
      const id = ctx.params.id
      // TODO: validate id
      // find todo from repo
      // send todo
    },
    async update (ctx) {

    },
    async delete (ctx) {

    },
    async complete (ctx) {

    },
    async incomplete (ctx) {

    },
  }
}
