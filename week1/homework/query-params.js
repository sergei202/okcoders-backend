function parseParams(str) {
	var obj = {};
	var pairs = str.split('&');
	pairs.forEach(pair => {
		if(!pair) return;
		var parts = pair.split('=');
		obj[parts[0]] = parts[1];
	});
	return obj;
}

console.log(parseParams('name=John&color=red&age=29'));		// {name:'John', color:'red', age:'29'}
console.log(parseParams(''));								// {}
console.log(parseParams('item=eggs&qty=2&item=milk'));		// === {qty:2, item:'milk'}
