module.exports = {
  create,
  addChoice,
  vote
}

async function create (db, tweetId, poll) {
  await db.execute(`
    insert into tweet_polls (
      tweet_id, end_time
    ) values (
      ?, ?
    )
  `, [
    tweetId, poll.endTime
  ])
}

async function addChoice (db, tweetId, content) {
  const result = await db.execute(`
    insert into tweet_choices (
      tweet_id, content
    ) values (
      ?, ?
    )
  `, [
    tweetId, content
  ])
  return result[0].insertId
}

async function vote (db, userId, tweetId, choiceId) {
  await db.execute(`
    insert into tweet_choices (
      user_id, tweet_id, choice_id
    ) values (
      ?, ?, ?
    )
  `, [
    userId, tweetId, choiceId
  ])
}
