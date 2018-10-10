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


## Docker

The following command will run `echo-api-server` on port 3007:

```
docker run -d --name echo-api-server highmountaintea/echo-api-server:latest
```

If you want to run it on port 8080 and expose it, here is the command: (* don't expose a port to public unless you know what you are doing)

```
docker run -d --name echo-api-server -e "PORT=8080" -p 8080:8080 highmountaintea/echo-api-server:latest
```