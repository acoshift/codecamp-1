module.exports = {
  create,
  changePhoto,
  changeCover,
  follow,
  unfollow
}

async function create (db, user) {
  const result = await db.execute(`
    insert into users (
      username, email, password, name, status
    ) values (
      ?, ?, ?, ?, ?
    )
  `, [
    user.username, user.email, user.password,
    user.name, 0
  ])
  return result[0].insertId
}

async function changePhoto (db, userId, photoUrl) {
  await db.execute(`
    update users set
      photo = ?
    where id = ?
  `, [photoUrl, userId])
}

async function changeCover (db, userId, photoUrl) {
  await db.execute(`
    update users set
      cover = ?
    where id = ?
  `, [photoUrl, userId])
}

async function follow (db, followerId, followingId) {
  await db.execute(`
    insert into follows (
      follower_id, following_id
    ) values (
      ?, ?
    )
  `, [followerId, followingId])
}

async function unfollow (db, followerId, followingId) {
  await db.execute(`
    delete from follows
    where follower_id = ? and following_id = ?
  `, [followerId, followingId])
}
