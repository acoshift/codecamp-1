function create (row) {
  return {
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name
  }
}

module.exports = function (db) {
  return {
    async getAll () {
      const [rows] = await db.execute(`
        select id, first_name, last_name
        from users
      `)
      return rows.map(create)
    }
  }
}
