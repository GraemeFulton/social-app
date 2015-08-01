var express = require('express')
var router = express.Router();

router.get('/', function(req,res){
	
	res.sendfile('layouts/posts.html')
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router