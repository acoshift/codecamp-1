const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'db1'
})

;(async function () {
  const db = await pool.getConnection()

  await db.beginTransaction()
  try {
    const [rows] = await db.execute(`
      select
        id, first_name, last_name
      from users
      where id = ?
    `, [1])
    console.log(rows)

    await db.execute(`
      update users
      set
        first_name = ?
      where id = ?
    `, ['new user', 1])
    await db.commit()
  } catch (err) {
    console.log(err)
    await db.rollback()
  }
  await db.release()
})().then(
 () => {},
 (err) => { console.log(err) }
)
