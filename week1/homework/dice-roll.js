function diceRoll() {
	var result = Math.random();		// [0 1)
	result = result * 6;
	result = 1 + Math.floor(result);
	return result;
}

console.log(diceRoll());
