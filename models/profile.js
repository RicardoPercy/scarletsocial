var orm = require('../config/orm.js');

var profile = {
	all: function(cb) {
		orm.all('profile', function(res){
			cb(res);
		})
	},
	create: function(name, cb){
		orm.create('profile', name, cb);
	}
}

module.exports = profile;