const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const Todo = require('./controller/todo')

const router = new Router()
  .get('/todos', Todo.list)
  .post('/todos', Todo.create)
  .get('/todos/:id', Todo.get)
  .patch('/todos/:id', Todo.update)
  .delete('/todos/:id', Todo.remove)
  .put('/todos/:id/complete', Todo.complete)
  .delete('/todos/:id/complete', Todo.incomplete)

const app = new Koa()
  .use(bodyParser())
  .use(router.routes())
  .listen(3000)
