module.exports = {
  create,
  markAsRead
}

async function create (db, userId, noti) {
  const result = await db.execute(`
    insert into notifications (
      user_id, title, content, photo
    ) values (
      ?, ?, ?, ?
    )
  `, [
    userId, noti.title, noti.content, noti.photo
  ])
  return result[0].insertId
}

async function markAsRead (db, notiId) {
  await db.execute(`
    update notifications set
      is_read = true
    where id = ?
  `, [notiId])
}
