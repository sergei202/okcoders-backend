const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('./public'));

app.listen(3000);

console.log('Listening at http://localhost:3000');


var tasks = [];

// addTask('Server task 1');
// addTask('Server task 2');

function getTasks() {
	return tasks;
}

function addTask(name) {
	var task = {
		name: name,
		completed: false
	};
	tasks.push(task);
}

function toggleTask(name) {
	var task = tasks.find(t => t.name===name);
	console.log('toggleTask: name=%o, task=%o', name, task);
	if(!task) return false;
	task.completed = !task.completed;
	return true;
}


app.get('/tasks', (req,res) => {
	res.json(getTasks());
});

app.post('/tasks', (req,res) => {		// body: {name}
	console.log('POST /tasks: ', req.body);
	addTask(req.body.name);
	res.json(getTasks());
});

app.post('/toggle',  (req,res) => {		// body: {name}
	console.log('POST /toggle: ', req.body);
	toggleTask(req.body.name);
	res.json(getTasks());
});
