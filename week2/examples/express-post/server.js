// npm install express body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(3000);
console.log('Listening on port 3000');


var item = 'Nothing';

app.get('/item', (req,res) => {
	res.json(item);
});

app.post('/item', (req,res) => {
	item = req.body;
	res.json(item);
});
