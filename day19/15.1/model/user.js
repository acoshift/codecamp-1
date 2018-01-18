class User {
  constructor (db, row) {
    this._db = db

    this.id = row.id
    this.firstName = row.first_name
    this.lastName = row.last_name
  }

  async save () {
    if (!this.id) {
      const result = await this._db.execute(`
        insert into users (
          first_name, last_name
        ) values (
          ?, ?
        )
      `, [this.firstName, this.lastName])

      this.id = result.insertId
      return
    }

    return this._db.execute(`
      update users
      set
        first_name = ?,
        last_name = ?
      where id = ?
    `, [this.firstName, this.lastName, this.id])
  }

  remove () {
    return this._db.execute(`
      delete from users where id = ?
    `, [this.id])
  }
}

module.exports = function (db) {
  return {
    async find (id) {
      // TODO: fix bug id undefined
      const [rows] = await this.db.execute(`
        select
          first_name, last_name
        from users
        where id = ?
      `, [id])
      return new User(db, rows[0])
    },
    async findAll () {
      // TODO: fix bug id undefined
      const [rows] = await this.db.execute(`
        select
          first_name, last_name
        from users
      `)
      return rows.map((row) => new User(db, row))
    },
    async findByUsername (username) {
      // TODO: implement find by username
    }
  }
}
