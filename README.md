# simple-rest-api
API to CREATE and GET messages

## How to Use
1. For first-time clone, use this command to install all dependencies:
```npm install```

2. `POST` request to create a new message:
```
POST http://localhost:3000/api/v1/messages

Request:
{
    "message": "this is a test message"
}

Response 201:
{
    "status": "ok",
    "message": "this is a test message"
}
```

3. `GET` request to get all previous messages:
```
GET http://localhost:3000/api/v1/messages

Response 200:
{
    "status": "ok",
    "count": 1,
    "messages": [
        "this is a test message"
    ]
}
```

4. You can unit-test the `test` folder with this command:
```mocha test```