# Twitter CRUD 1

## POST /auth/signup

Sign up new user.

* Content-Type: application/json

```json
{
    "email": "test@example.com",
    "username": "tester",
    "password": "password 1234 lol ezez!!!!",
    "name": "Tester Hajime"
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

---

## POST /auth/signin

Sign in user.

* Content-Type: application/json

```json
{
    "email": "test@example.com",
    "password": "password 1234 lol ezez!!!!"
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

### Example response

* Status: 401
* Content-Type: application/json; charset=utf-8

Returns the error message if not authorized.

```json
{
    "error": "wrong password"
}
```

===

## GET /auth/signout

Sign out user.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

===

## POST /auth/verify

Verify user email from token.

* Content-Type: application/json

```json
{
    "token": "123456789"
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

### Example response

* Status: 400
* Content-Type: application/json; charset=utf-8

Returns the error message if token not found or invalid

```json
{
    "error": "invalid token"
}
```

===

### PATCH /user/:id

Update user data.

* Content-Type: application/json

```json
{
    "name": "Tester Kirito",
    "profilePhoto": "https://example.com/image1",
    "coverPhoto": "https://example.com/image2",
    "location": "Bangkok, Thailand",
    "bio": "Inw True Kirito",
    "theme": "#00ff00",
    "birthDateD": "12",
    "birthDateM": "09",
    "birthDateY": null,
    "showBirthDateY": false,
    "showBirthDateDM": true
}
```

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

### Example response

* Status: 401
* Content-Type: application/json; charset=utf-8

Returns the error message if not sign in.

```json
{
    "error": "unauthorized"
}
```

### Example response

* Status: 403
* Content-Type: application/json; charset=utf-8

Returns the error message if not have permission.

```json
{
    "error": "forbidden"
}
```

## PUT /user/:id/follow

Follow an user.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

## DELETE /user/:id/follow

Unfollow an user.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the empty object.

```json
{}
```

## GET /user/:id/follow

List users that given user follow.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the list of users.

where

* `id` // user id
* `username` // username
* `profilePhoto` // user's profile photo
* `coverPhoto` // user's cover photo
* `bio` // user's bio
* `isFollow` // is current user follow this user

```json
{
    "users": [
        { "id": 1, "username": "hacker", "profilePhoto": "...", "coverPhoto": "...", "bio": "...", "isFollow": false }
    ]
}
```

## GET /user/:id/followed

List users that follow given user.

===

### Example response

* Status: 200
* Content-Type: application/json; charset=utf-8

Returns the list of users.

where

* `id` // user id
* `username` // username
* `profilePhoto` // user's profile photo
* `coverPhoto` // user's cover photo
* `bio` // user's bio
* `isFollow` // is current user follow this user

```json
{
    "users": [
        { "id": 1, "username": "hacker", "profilePhoto": "...", "coverPhoto": "...", "bio": "...", "isFollow": false }
    ]
}
```
