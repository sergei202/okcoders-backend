const mongoose = require('mongoose');

mongoose.connect('mongodb://sergei:sergei1@ds033601.mlab.com:33601/okcoders', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', {
	name: String
});

// let kitty = new Cat({name: 'Lost', age:1, owner:'Sergei'});
// kitty.save().then(doc => console.log('kitty = %j', doc));

Cat.find({}).then(cats => {
	console.log('cats: ', cats);
});
