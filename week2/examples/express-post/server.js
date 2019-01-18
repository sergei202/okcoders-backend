// npm install express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static('./public'));

app.listen(3000);
console.log('Listening on port 3000');

app.get('/api', (req,res) => {
	res.json({date:new Date()});
});

app.post('/api', (req,res) => {
	console.log('POST body: %j', req.body);
	res.json({...req.body, date:new Date()});
});

