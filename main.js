var mysql = require('mysql');

const sequelize = new Sequelize('scarletsocial', 'root', '', {
	host:'localhost',
	dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},

});



var connection = mysql.createConnection({
	host:'localhost',
	port: 3306,
	user:'root',
	password:"",
	database:'scarletsocial'
})

connection.connect(function(err){
	console.log('connected as id: ' + connection.threadId);
});