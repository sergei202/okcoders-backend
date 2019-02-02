function getTasks() {
	$.get('/tasks').then(tasks => {
		console.log('getTasks: ', tasks);
		displayTasks(tasks);
	});
}


function addTask(name) {
	$.post('/tasks', {name:name}).then(tasks => {
		console.log('addTask: ', tasks);
		displayTasks(tasks);
	});
}


function toggleTask(id) {
	console.log('toggleTask: id=%o', id);
	$.post('/toggle', {id:id}).then(tasks => {
		console.log('toggleTask: result=%o', tasks);
		displayTasks(tasks);
	});
}

function deleteTask(id) {
	console.log('deleteTask: id=%o', id);
	$.post('/delete', {id:id}).then(tasks => {
		console.log('deleteTask: result=%o', tasks);
		displayTasks(tasks);
	});
}


function displayTasks(tasks) {
	var ul = $('ul');
	ul.empty();
	tasks.forEach(task => {
		var li = $('<li>');
		li.attr('taskId', task.id);

		var name = $('<span>');
		name.text(task.name);
		li.append(name);

		if(task.completed) name.addClass('completed');
		ul.append(li);

		name.click(function() {
			var li = $(this).parent('li');
			toggleTask(li.attr('taskId'));
		});

		var deleteBtn = $('<span class="deleteBtn">X</span>');
		li.append(deleteBtn);
		deleteBtn.click(function() {
			var li = $(this).parent('li');
			deleteTask(li.attr('taskId'));
		});

	});
}

$(document).ready(() => {
	getTasks();

	$('.addTaskBtn').click(btn => {
		var name = $('.taskName').val();
		if(!name) return;
		$('.taskName').val('');
		console.log('Button clicked, name=%o', name);
		addTask(name);
	});
});

