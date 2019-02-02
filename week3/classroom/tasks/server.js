const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

// Setup express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));
app.listen(3000);
console.log('Listening at http://localhost:3000');

// Setup Mongoose
mongoose.connect('mongodb://sergei:sergei1@ds033601.mlab.com:33601/okcoders', {useNewUrlParser: true});

const Task = mongoose.model('Task', {
	name: String,
	completed: Boolean
});



function getTasks() {
	return Task.find().sort({completed:1, name:1}).exec();
}

function getTask(id) {
	return Task.findById(id).exec();
}

function addTask(name) {
	var task = {
		name: name,
		completed: false
	};
	task = new Task(task);
	return task.save();
}

function toggleTask(id) {
	return getTask(id).then(task => {
		if(!task) return false;
		task.completed = !task.completed;
		return task.save();
	});
}

function deleteTask(id) {
	return getTask(id).then(task => {
		if(!task) return false;
		return task.remove();
	});
}


app.get('/tasks', (req,res) => {
	getTasks().then(tasks => {
		res.json(tasks);
	});
});

app.post('/tasks', (req,res) => {		// body: {name}
	console.log('POST /tasks: ', req.body);
	addTask(req.body.name)
		.then(getTasks)
		.then(tasks => res.json(tasks));
});

app.post('/toggle',  (req,res) => {		// body: {id}
	console.log('POST /toggle: ', req.body);
	toggleTask(req.body.id)
		.then(getTasks)
		.then(tasks => res.json(tasks));
});

app.post('/delete',  (req,res) => {		// body: {id}
	console.log('POST /delete: ', req.body);
	deleteTask(req.body.id)
		.then(getTasks)
		.then(tasks => res.json(tasks));
});