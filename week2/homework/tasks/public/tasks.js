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
		console.log('toggleTask: ', tasks);
		displayTasks(tasks);
	});
}


function displayTasks(tasks) {
	var ul = $('ul');
	ul.empty();
	tasks.forEach(task => {
		var li = $('<li>');
		li.text(task.name);
		if(task.completed) li.addClass('completed');
		ul.append(li);

		li.click(function() {
			var li = $(this);
			toggleTask(li.text());
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

