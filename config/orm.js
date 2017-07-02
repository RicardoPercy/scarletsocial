var connection = require('./connection.js');

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM ' + tableInput+ ';', function(err, result){
			if (err) throw (err);
			cb(result)
		})
		
	},

	create: function(tableInput, val, cb){
		connection.query('INSERT INTO '+tableInput+' (id) VALUES ("'+val+'");', function(err,result){
			if (err) throw (err);
			cb(result);
		} )
	},


}

module.exports = orm;
