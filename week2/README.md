# Week 1 - Backend and Frontend

## Promises and `async`/`await`
Promises are for _asynchronous_ programming.  They are a _promise_ to return a value sometime in the future.

### Examples
- `battery.js`

### Links
- [JavaScript Promises](https://flaviocopes.com/javascript-promises/)
- [Learn Async Await](https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65)


## Fetch API
The Fetch API allows us to make HTTP calls from our browser.

We can use it for GET requests:
```js
fetch('/items').then(res => res.json()).then(items => console.log(items));
```

We can also use it to make POST requests:
```js
var itemsToAdd = [{name:'eggs', qty:5}];
fetch('/items', {
	method: 'POST',
	body: JSON.stringify(itemsToAdd),
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}).then(res => res.json()).then(items => console.log(items));
```

### Links
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Any API](https://any-api.com)

## Express POST Requests
We can listen for POST requests on our Express server using `app.post()`:
```js
app.post('/api', (req,res) => {
	console.log('POST body: %j', req.body);
	res.json({...req.body, date:new Date()});
});
```

One catch is that we'll have to install `body-parser` and use it:
```js
app.use(bodyParser.json());
```

### CORS
Cross-Origin Resource Sharing.  To enable CORS:
```js
var cors = require('cors');
...
app.use(cors());
```
