const mysql = require('mysql2/promise')

module.exports = async function (config) {
  const conn = await mysql.createConnection(config)

  return {
    execute (query) {
      return conn.execute(query)
    }
  }
}

