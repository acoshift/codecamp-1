function createEntity (row) {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name
  }
}

async function find (db, id) {
  // TODO: fix bug id undefined
  const [rows] = await db.execute(`
    select
      first_name, last_name
    from users
    where id = ?
  `, [id])
  return createEntity(rows[0])
}

async function findAll (db) {
  // TODO: fix bug id undefined
  const [rows] = await db.execute(`
    select
      first_name, last_name
    from users
  `, [id])
  return rows.map(createEntity)
}

async function findByUsername (db, username) {
  // TODO: implement find by username
}

async function store (db, user) {
  if (!user.id) {
    const result = await db.execute(`
      insert into users (
        first_name, last_name
      ) values (
        ?, ?
      )
    `, [user.firstName, user.lastName])

    user.id = result.insertId
    return
  }

  // TODO: add await ???
  return db.execute(`
    update users
    set
      first_name = ?,
      last_name = ?
    where id = ?
  `, [user.firstName, user.lastName, user.id])
}

function remove (db, id) {
  return db.execute(`
    delete from users where id = ?
  `, [id])
}

module.exports = {
  find,
  findAll,
  findByUsername,
  store,
  remove
}