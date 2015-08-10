var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/social', function(){
	
	console.log('mongodb connected');
	
})

module.exports = mongoose;