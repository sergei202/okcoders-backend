const express = require('express');
const app = express();

app.listen(3000);


var votesA=0, votesB=0;
app.get('/a', (req,res) => {
	votesA++;
	res.json({votesA, votesB});
});
app.get('/b', (req,res) => {
	votesB++;
	res.json({votesA, votesB});
});
app.get('/', (req,res) => {
	res.json({votesA, votesB});
});
