const mongoose = require('mongoose');

mongoose.connect('mongodb://sergei:sergei1@ds033601.mlab.com:33601/okcoders', {useNewUrlParser: true});

const Item = mongoose.model('Item', {
	name: String,
	qty: Number,
	price: Number
});

var item1 = new Item({name:'Awesome1', qty:1, price:999});
var item2 = new Item({name:'Awesome2', qty:1, price:999});
var item3 = new Item({name:'Awesome3', qty:1, price:999});

// Save items in series
// item1.save()
// 	.then(() => item2.save())
// 	.then(() => item3.save())
// 	.then(() => {
// 		console.log('All items saved');
// 	});

// Save items in parallel
Promise.all([
	item1.save(),
	item2.save(),
	item3.save()
]).then(items => {
	console.log('All items saved: %j', items);
});


// getItems().then(items => {
// 	var item = items[0];
// 	console.log('item: %j', item);

// 	item.price += 1;
// 	item.save().then(item => {
// 		console.log('after save: %j', item);
// 	});
// });

// createItem({
// 	name: 'Extra Lean Water',
// 	qty:42,
// 	price:0.99
// }).then(() => {
// 	getItems().then(console.log);
// });



function createItem(item) {
	item = new Item(item);
	return item.save();
}

function getItems() {
	return Item.find({}).exec();
}
