var Post = require('../../models/post')
var router = require('express').Router()


/**
 * API GET Endpoint
 */
 //because it's namespaced in server.js, we can leave out that part of the path
router.get('/', function(req,res, next){	 
	 Post.find()
	 .sort('-date')
	 .exec(function(err,posts){
		if(err){return next(err)}
		res.json(posts);			 
	 })
	
})



/**
 * API POST Endpoint
 */
 router.post('/', function(req, res, next){
	 
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
 })
 
 module.exports = router;