function getRequest(url) {
	return fetch(url)
		.then(res => res.json());
}
function postRequest(url,body) {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(body),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	});
}

postRequest('/item', {name:'NEW2'})
	.then(() => getRequest('/item'))
	.then(item => console.log(item));
	