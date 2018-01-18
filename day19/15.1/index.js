const mysql2 = require('mysql2/promise')

async function main () {
  const db = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'codecamp'
  })

  const User = require('./model/user')(db)

  const user1 = await User.find(1)
  user1.name = 'tester'
  await user1.save()

  const user2 = await User.find(2)
  await user2.remove()
}

main()
