// var sergei = {
// 	name: 'Sergei',
// 	age: 34,
// 	kids: ['Sophie','Ellie','Emily']
// };
// sergei.kids.push('Frank');
// sergei.gender = 'M';
// console.log(sergei);

function generateStats(nums) {
	var stats = {
		nums: nums,
		sum: 0
	};
	nums.forEach(n => stats.sum += n);
	stats.avg = stats.sum / nums.length;

	return stats;
}

var stats = generateStats([5,10,15,22]);	// returns {sum,avg,nums}
console.log(stats);

console.log(generateStats([10,20,50,100]));
