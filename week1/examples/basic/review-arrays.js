// var nums = ['cat','dog','tree','person'];

// console.log(nums);
// console.log(nums.length);
// console.log(nums[2]);		// Arrays are indexed from zero

// nums.push('bird');
// console.log(nums);

// var lastItem = nums.pop();
// console.log('lastItem', lastItem);

// var parts = ['John','Wick','one','two'];
// console.log(parts.join(' '));

// var str = '1 3 5 7 9';
// console.log(str.split(' '));

// var nums = [10,20,30,40,50];
// var ans = nums.map(n => n*10);
// console.log(ans);

// var nums = [1,2,5,18,17,19,23];
// console.log(nums.filter(n => n<5));
// console.log(nums.every(n => n>0));

// var nums = [12,3,55,66];
// var total = 0;
// nums.forEach(n => total+=n);
// var total = nums.reduce((a,b) => a+b);
// console.log(total);


var str = '15,23,11,55,22,50';
var nums = str.split(',');
nums = nums.map(n => +n);
nums = nums.filter(n => n%2===0);
console.log(nums);

console.log('15,23,11,55,22,50'.split(',').map(n => +n).filter(n => n%2===0));
