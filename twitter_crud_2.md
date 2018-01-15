# Twitter CRUD 1

## GET /tweet

List tweets

- `?user=tester` // the username to list tweets for given user
- `?start=2018-01-14T09:58:15.551Z` // start date
- `?limit=100` // limit tweets
- `?like=true` // list for liked tweets

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns list of tweets

```json
{
    "tweets": [
        {
            "id": 1,
            "text": "best programming language for backend ?",
            "photos": [
                "https://example.com/photo1",
                "https://example.com/photo2",
                "https://example.com/photo3"
            ],
            "user": {
                "id": 1,
                "username": "hacker",
                "profilePhoto": "...",
                "coverPhoto": "...",
                "bio": "...",
                "isFollow": false
            },
            "liked": 100,
            "retweet": 20,
            "poll": {
                "end": "2018-01-16T10:51:12.124Z",
                "votes": [
                    {
                        "id": 151,
                        "text": "JavaScript",
                        "voted": 20
                    },
                    {
                        "id": 152,
                        "text": "Golang",
                        "voted": 30
                    },
                    {
                        "id": 153,
                        "text": "Rust",
                        "voted": 10
                    }
                ]
            },
            "reply": [
                {
                    "id": 45,
                    "text": "Good question!!",
                    "user": {
                        "id": 3,
                        "username": "Player",
                        "profilePhoto": "...",
                        "coverPhoto": "...",
                        "bio": "...",
                        "isFollow": true
                    }
                }
            ]
        }
    ]
}
```

## POST /tweet

Create new tweet

* Content-Type: application/json

```json
{
    "text": "best text editor in 2018 ?",
    "photos": [
        "https://example.com/photo1"
    ],
    "poll": {
        "end": "2018-01-16T10:51:12.124Z",
        "votes": [
            "VS Code",
            "Atom",
            "Vim"
        ]
    }
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the tweet object.

```json
{
    "id": 43,
    "text": "best text editor in 2018 ?",
    "photos": [
        "https://example.com/photo1"
    ],
    "user": {
        "id": 1,
        "username": "hacker",
        "profilePhoto": "...",
        "coverPhoto": "...",
        "bio": "...",
        "isFollow": false
    },
    "liked": 0,
    "retweet": 0,
    "poll": {
        "end": "2018-01-16T10:51:12.124Z",
        "votes": [
            {
                "id": 160,
                "text": "VS Code",
                "voted": 0
            },
            {
                "id": 161,
                "text": "Atom",
                "voted": 0
            },
            {
                "id": 162,
                "text": "Vim",
                "voted": 0
            }
        ]
    },
    "reply": []
}
```

## PUT /tweet/:id/like

Like a tweet

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```

## DELETE /tweet/:id/like

Unlike a tweet

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```

## POST /tweet/:id/retweet

Retweet a tweet

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```

## POST /tweet/:id/vote/:voteId

Vote a tweet

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```

## POST /tweet/:id/reply

Reply a tweet

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```

## GET /notification

List user's notification

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the list of notification object

```json
{
    "notifications": [
        {
            "id": 46,
            "text": "Player follow you.",
            "photo": "...",
            "read": false,
            "createdAt": "2018-01-14T09:58:15.551Z"
        }
    ]
}
```

## GET /message

List all direct messages

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the list of message object with user object

```json
{
    "messages": [
        {
            "text": "Hi",
            "createdAt": "2018-01-14T09:58:15.551Z",
            "read": false,
            "user": {
                "id": 4,
                "username": "Player",
                "profilePhoto": "...",
                "coverPhoto": "...",
                "bio": "...",
                "isFollow": true
            }
        }
    ]
}
```

## GET /message/:userId

List all message for given user room

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the list of message object

```json
{
    "user": {
        "id": 4,
        "username": "Player",
        "profilePhoto": "...",
        "coverPhoto": "...",
        "bio": "...",
        "isFollow": true
    },
    "messages": [
        {
            "text": "Hi",
            "createdAt": "2018-01-14T09:58:15.551Z",
            "read": true
        }
    ]
}
```

## POST /message/:userId

Send a direct message to given user

* Content-Type: application/json

```json
{
    "text": "Hello"
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object

```json
{}
```
