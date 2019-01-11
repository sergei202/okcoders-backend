# Week 1 - NodeJS

## Basics

### What is NodeJS?
- Server-side Javascript
- DOM-less environment
- Modular

### REPL
Running `node` without any arguments will start REPL: Read Evaluate Print Loop.
Press `Ctrl-C` twice to exit.

### Running NodeJS Programs
Start a node program (or script) with `node cool-stuff.js`.
The program will exit on it's own when complete or `Ctrl-C` to quit.

#### Examples
- `basics/hello-world.js`
- `basics/add.js`

### NodeJS Modules
NodeJS is fully modular and has a huge package egosystem at [npmjs.com](https://www.npmjs.com/).

- `npm`
- `require()`
- `module.exports`

#### Examples
- `basics/webserver.js`
- `basics/main.js` and `basics/helper.js`

### Links
- [NodeJS Modules](https://nodejs.org/docs/latest/api/modules.html)
- [W3Schools](https://www.w3schools.com/nodejs/default.asp)



## ExpressJS
Express is a Node package that wraps the `http` module and makes it much easier to use.

Express uses the concept of _routes_.  Each route also has a [_HTTP method_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) tied to it.  We'll only use two of them: GET and POST.

Here are some examples methods and routes:
- GET `/`
- GET `/api/user/1234`
- POST `/api/user/1234`

### My First Express Server
```js
const express = require('express');
const app = express();
app.get('/', (req,res) => {
	res.send('<h1>Hello World!</h1>');
});
app.listen(3000);
```

### Request and Response
Along with routes, Express uses _request_ (`req`) and _response_ (`res`) objects.  These are arguments to _route handlers_.  Both have many methods and properties, these are the main ones we'll use and discuss:
- `req.params` - URL params passed in the route
- `req.query` - Query params passed in the route
- `req.body` - The body of POST requests
- `res.send()` - Send text/html as the response
- `res.json()` - Send JSON as the reponse

#### URL Params
We can pass dynamic data to our route handlers using URL params.
URL params are defined with a `:name` in the route.  If we have a route of `/hello/:name` and hit `/hello/Sergei`, `req.params.name` will equal `'Sergei'`.

### Examples
- `express/hello-world.js`
- `express/counter.js`
- `express/add.js`

### Links
- [Express Hello World](http://expressjs.com/en/starter/hello-world.html)
- [Express Basic Routing](http://expressjs.com/en/starter/basic-routing.html)
- [Express Routing Guide](http://expressjs.com/en/guide/routing.html)
- [Express Static Files](http://expressjs.com/en/starter/static-files.html)
