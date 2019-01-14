const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req,res) => {
	var num1 = +req.params.num1;
	var num2 = +req.params.num2;
	var answer = num1+num2;
	res.send('Answer: '+answer);
});

app.listen(3000);
console.log('Visit http://localhost:3000/add/123/44');
