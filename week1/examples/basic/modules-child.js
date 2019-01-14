function add(a,b) {
	console.log('add: ',a,b);
	return a+b;
}
function mult(a,b) {
	console.log('mult: ',a,b);
	return a*b;
}
function sum(nums) {
	return nums.reduce((a,b) => a+b, 0);
}
function avg(nums) {
	return sum(nums)/nums.length;
}

module.exports = {
	add: add,
	avg: avg,
	sum: sum,
	mult: mult,
	favNum: 202
};
