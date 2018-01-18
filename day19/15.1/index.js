const mysql2 = require('mysql2/promise')
const createUserModel = require('./model/user')

async function main () {
  const db = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'codecamp'
  })

  const User = createUserModel(db)

  const user1 = await User.find(1)
  user1.name = 'tester'
  await user1.save()

  const user2 = await User.find(2)
  await user2.remove()
}

main()
