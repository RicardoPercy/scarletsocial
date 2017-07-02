var express = require('express');
var router = express.Router();
var profile = require('../models/profile.js');

router.get ('/', function(req, res){
	profile.all(function(profile_data){
		console.log(profile_data)
		res.render('index', {profile_data});
	})
	
});

router.post('/profile/create', function(req, res){
	profile.create(req.body.fullname, function(result){
		res.redirect('/');
	})
});


module.exports = router;