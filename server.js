var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
 
 //call the api
//require('./controllers/api/posts')(app)
//app.use(require('./controllers/api/posts'))
//namespace the route
app.use('/api/posts', require('./controllers/api/posts'))

//posts page GET posts.html endpoint
//  app.get('/', function (req,res,next){
// 	 res.sendfile('layouts/posts.html')	 
//  })
app.use(require('./controllers/static'))
//equievalent to: app.use('/', require('./controllers/static'))
 

app.listen(3000, function(){
	
	console.log('listening on ', 3000)
	
})