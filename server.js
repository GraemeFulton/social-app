var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

 //posts page GET endpoint
 app.get('/', function (req,res,next){
	 
	 res.sendfile('layouts/posts.html')
	 
 })

app.listen(3000, function(){
	
	console.log('listening on ', 3000)
	
})

//call the api
//require('./controllers/api/posts')(app)
//app.use(require('./controllers/api/posts'))
//namespace the route
app.use('/api/posts', require('./controllers/api/posts'))