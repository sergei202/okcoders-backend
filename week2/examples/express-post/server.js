// npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(3000);
console.log('Listening on port 3000');


var items = [];

app.get('/items', (req,res) => {
	res.json(items);
});

app.post('/item', (req,res) => {
	item = req.body;
	items.push(item);
	res.json(items);
});
