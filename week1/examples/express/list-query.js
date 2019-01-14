// npm install express
const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

var items = [];
app.get('/', (req,res) => {
	var html = '<h1>Shopping List:</h1><ul>';
	html += items.map(item => {
		var str = '';
		if(item.qty) str += item.qty + 'x ';
		str += item.name;
		if(item.price) str += ' @ $'+item.price;
		return '<li>'+str+'</li>';
	}).join('\n');
	html += '</ul>';
	res.send(html);
});

app.get('/item', (req,res) => {
	if(req.query.qty) req.query.qty = +req.query.qty;
	if(req.query.price) req.query.price = +req.query.price;
	items.push(req.query);
	res.json(items);
});
