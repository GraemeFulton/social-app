var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post')

var app = express();
app.use(bodyParser.json());


/**
 * Get Endpoints
 */
 
 //posts page GET endpoint
 app.get('/', function (req,res,next){
	 
	 res.sendfile('layouts/posts.html')
	 
 })
 
 //API Endpoint
app.get('/api/posts', function(req,res, next){

	// res.send('GET request to homepage');
	/**
	 * res.json just sends back json 
	 */
	 
	 Post.find()
	 .sort('-date')
	 .exec(function(err,posts){
		if(err){return next(err)}
		res.json(posts);			 
	 })
	 
	// Post.find(function(err,posts){
		
	// 	if(err){return next(err)}
	// 	res.json(posts);	
	// })
	
	// res.json([	
	// 	{
	// 		username:'graeme',
	// 		body:'pies!'
			
	// 	}	
	// ])
	
})

/**
 * POST Endpoint
 */
 app.post('/api/posts', function(req, res, next){
	 
	 //Crate new post model
	 var post = new Post({
		
		username: req.body.username,
		body: req.body.body	 
		 
	 })
	 //save the new post model
	 post.save(function(err, post){
		 
		 if(err){ return next(err) }
		
		 //client only receives 201 (created)
		 res.json(201,post)
	 })
	 
	//  console.log('post received!')
	//  console.log(req.body.username)
	//  console.log(req.body.body)
	//res.sendStatus(201)
 })
 

app.listen(3000, function(){
	
	console.log('listening on ', 3000)
	
})