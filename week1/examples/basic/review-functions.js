function sayHello(first,last) {
	console.log('Hello', first, last);
	return 'Hello ' + first + ' '+last;
}
sayHello('John', 'Wick');

function add(a,b) {
	console.log('add: ',a,b);
	return a+b;
}
function mult(a,b) {
	console.log('mult: ',a,b);
	return a*b;
}

var answer = add(mult(5,5), add(5,5));
console.log(answer);


var func = sayHello;
answer = func(4,5);
console.log(answer);


