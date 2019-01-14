const express = require('express');
const app = express();

app.listen(3000);

app.use('/', express.static('./public/'));

console.log('Visit http://localhost:3000');
