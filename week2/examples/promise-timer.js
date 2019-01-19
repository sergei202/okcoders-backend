console.log('Start');

// setTimeout(() => {
// 	console.log('Timeout 1');
// 	setTimeout(() => {
// 		console.log('Timeout 2');
// 		setTimeout(() => {
// 			console.log('Timeout 3');
// 			setTimeout(() => {
// 				console.log('Timeout 4');
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);

timer()
	.then(timer)
	.then(timer)
	.then(timer)
	.then(timer)
	.then(timer)
	.then(timer);


function timer() {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log('Timeout done');
			resolve();
		}, 500);
	});
}





console.log('End');
