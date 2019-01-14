// npm install express
const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

app.get('/hello', (req,res) => {
	res.send('<h1>Hello</h1>');
});
app.get('/hello/:name', (req,res) => {
	// req.params.name
	res.send('<h1>Hello ' + req.params.name +' </h1>');
});
