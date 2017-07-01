var orm = require('../config/orm.js');

var scarletsocial = {
	all: function(cb) {
		orm.all('profile', function(res){
			cb(res);
		})
	}
}

module.exports = scarletsocial;