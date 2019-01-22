# Week 2 Homework

This week you'll create a TODO application that allows you to add tasks and mark them complete.

## Part 1: Frontend

Start off by creating a frontend version of the application and get that working.

Here are the basic pieces:
- An input field for the To Do task
- A button to add the task
- List the tasks in a `<ul>`/`<li>`
- Clicking a task will toggle it being completed
- Completed tasks be striked out

The stateful data will be an array of tasks.  Each task will be an object with a `name` and `completed` property.

You'll also create creating functions that allow you to _interface_ between the GUI and your data:
- `getTasks()`
- `addTask(name)`
- `toggleTask(name)`

## Part 2: Backend

After you get the frontend working, you'll move the stateful parts to the backend.

Here is the general steps:

### Get the frontend served by the backend
You'll use `express.static()` for this.


### Move stateful parts to the backend
You'll move your `tasks` and interface functions to the backend.

### Add express routes
I suggest these routes:
	- GET `/tasks`
	- POST `/task`
	- POST `/toggle`

Finally, change the frontend to use these routes.

