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


function toggleTask(name) {
	$.post('/toggle', {name:name}).then(tasks => {
		console.log('toggleTask: result=%o', tasks);
		displayTasks(tasks);
	});
}

function deleteTask(name) {
	console.log('deleteTask: name=%o', name);
	$.post('/delete', {name:name}).then(tasks => {
		displayTasks(tasks);
	});
}


function displayTasks(tasks) {
	var ul = $('ul');
	ul.empty();
	tasks.forEach(task => {
		var li = $('<li>');
		li.attr('name', task.name);

		var name = $('<span>');
		name.text(task.name);
		li.append(name);

		if(task.completed) name.addClass('completed');
		ul.append(li);

		name.click(function() {
			var li = $(this).parent('li');
			toggleTask(li.attr('name'));
		});

		var deleteBtn = $('<span class="deleteBtn">X</span>');
		li.append(deleteBtn);
		deleteBtn.click(function() {
			var li = $(this).parent('li');
			deleteTask(li.attr('name'));
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

