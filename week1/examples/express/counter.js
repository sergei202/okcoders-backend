// npm install express
const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

var count = 0;
app.get('/', (req,res) => {
	count++;
	res.send('<h1>Count: '+count+'</h1>');
});
