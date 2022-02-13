# codebenderhq/server

## Description

Highly opinionated server framework for Denojs

## File Structure

Apis live in the `/api` directory.

file name is the name of the api.

functions in the API are the apis that are exposed to the client.

### Usage
eg: `POST: user/login` =
`./api/user/`
```ts
const login = (req: JSON) => {
        return {name:'joe'}
    }
```

eg: `GET: user` =
`./api/user/`
```ts
const index = () => {
        return {name:'user index'}
    }
```


## How To Run 
### Requirements
 [Denojs](https://deno.land/)

### Setup
```
git clone https://github.com/codebenderhq/fictional-palm-tree.git
```
### how to run
```
deno run --allow-net server.js
```


### Roadmap

- [x] GET Support
- [x] POST Support
- [ ] Support for query parameters
- [ ] Support for file uploads
- [ ] Support for sockets

And more to be rolled out!