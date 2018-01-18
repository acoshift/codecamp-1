const mysql2 = require('mysql2/promise')
const User = require('./repository/user')

async function main () {
  const db = await mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'codecamp'
  })

  const user1 = await User.find(db, 1)
  user1.firstName = 'tester'
  await User.store(db, user1)
}

main()
