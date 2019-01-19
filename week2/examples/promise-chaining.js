function add1(n) {
	return Promise.resolve(n+1);

	// return new Promise((resolve,reject) => {
	// 	resolve(a+b);
	// });
}

function double(n) {
	return Promise.resolve(n*2);
}


double(5)
	.then(add1)
	.then(double)
	.then(add1)
	.then(add1)
	.then(add1)
	.then(add1)
	.then(console.log);
