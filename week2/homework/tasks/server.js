const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('./public'));

app.listen(3000);

console.log('Listening at http://localhost:3000');


var tasks = [];		// {name, completed, id}

// addTask('Server task 1');
// addTask('Server task 2');

function getTasks() {
	return tasks;
}

function addTask(name) {
	var task = {
		id: tasks.length+1,
		name: name,
		completed: false
	};
	tasks.push(task);
}

function toggleTask(id) {
	var task = tasks.find(t => t.id===id);
	console.log('toggleTask: id=%o, task=%o', id, task);
	if(!task) return false;
	task.completed = !task.completed;
	return true;
}

function deleteTask(id) {
	var task = tasks.find(t => t.id===id);
	var index = tasks.indexOf(task);
	if(index===-1) return;
	tasks.splice(index,1);
}


app.get('/tasks', (req,res) => {
	res.json(getTasks());
});

app.post('/tasks', (req,res) => {		// body: {name}
	console.log('POST /tasks: ', req.body);
	addTask(req.body.name);
	res.json(getTasks());
});

app.post('/toggle',  (req,res) => {		// body: {id}
	console.log('POST /toggle: ', req.body);
	toggleTask(+req.body.id);
	res.json(getTasks());
});

app.post('/delete',  (req,res) => {		// body: {id}
	console.log('POST /delete: ', req.body);
	deleteTask(+req.body.id);
	res.json(getTasks());
});