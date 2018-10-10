# echo-api

This simple server will echo back whatever message it receives. It is a pure JSON API server.

## Usage

Start echo-api server by running the following in terminal:
```
npx echo-api
```
This will start the echo-api server on port 3007.


### GET request

Open a browser and go to `http://localhost:3007/echo/ThisIsTestMessage`. You should get this back:
```
{"echo":"ThisIsTestMessage"}
```


### POST request

Send this POST request `http://localhost:3007/echo`, with this BODY `{ "message": "ThisIsAnotherMessage" }`, and you will get back:
```
{
    "echo": "ThisIsAnotherMessage"
}
```
