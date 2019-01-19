// numberStats([10,5,15]) === {avg:10, min:5, max:15, length:3, nums:[10,5,15]}

function numberStats(nums) {
	var stats = {
		nums: nums,
		length: nums.length,
		min: Math.min(...nums),
		max: Math.max(...nums),
		avg: nums.reduce((a,b) => a+b, 0)/nums.length
	};
	return stats;
}

console.log(numberStats([10,5,15]));
