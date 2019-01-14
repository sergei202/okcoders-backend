// npm install express
const express = require('express');
const app = express();

app.listen(3000);
console.log('Listening on port 3000');

app.get('/', (req,res) => {
	res.json({name:'Cat', age:3, favs:[44,66,44,{food:'cat food'}]});
});
