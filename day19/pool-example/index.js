const mysql2 = require('mysql2/promise')

const pool = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  database: 'codecamp'
})

async function main () {
  const db = await pool.getConnection()
  try {
    const [rows] = await db.execute('')
    return rows[0]
  } finally {
    db.release()
  }

  // try {
  //   // use db....
  //   return ''
  // } catch (err) {
  //   return null
  // } finally {
  //   db.release()
  // }
}

main()
