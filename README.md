# echo-api

This simple server will echo back whatever is sent to it. It is a pure JSON API server.

## Usage

`echo-api` server can accept either GET or POST requests.

### GET request example

Send this GET request `/echo/ThisIsTestMessage`, and you will get back:
```
{
  "echo": "ThisIsTestMessage"
}
```

### POST request example

Send this POST request `/echo`, with this BODY `{ "message": "ThisIsAnotherMessage" }`, and you will get back:
```
{
  "echo": "ThisIsAnotherMessage"
}
```
