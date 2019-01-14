// npm install express
const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

var items = [];
app.get('/', (req,res) => {
	res.json(items);
});

app.get('/:name/:qty/:price', (req,res) => {
	items.push({
		name: req.params.name,
		qty: +req.params.qty,
		price: +req.params.price
	});
	res.json(items);
});
