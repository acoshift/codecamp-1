# Twitter Routes

## Auth

- POST /auth/signup
- POST /auth/signin
- GET /auth/signout
- POST /auth/verify

## Upload

- POST /upload

## User

- PATCH /user/:id
- PUT /user/:id/follow
- DELETE /user/:id/follow
- GET /user/:id/follow
- GET /user/:id/followed

## Tweet

- GET /tweet
- POST /tweet
- PUT /tweet/:id/like
- DELETE /tweet/:id/like
- POST /tweet/:id/retweet
- PUT /tweet/:id/vote/:voteId
- POST /tweet/:id/reply

## Notification

- GET /notification

## Direct Message

- GET /message
- GET /message/:userId
- POST /message/:userId
