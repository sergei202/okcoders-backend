const express = require('express');
const app = express();

app.listen(3000);

app.use(express.static('./public'));


var votesA=0, votesB=0;
app.get('/a', (req,res) => {
	votesA++;
	res.json({votesA,votesB});
});
app.get('/b', (req,res) => {
	votesB++;
	res.json({votesA,votesB});
});

app.get('/votes', (req,res) => {
	res.json({votesA,votesB});
});
