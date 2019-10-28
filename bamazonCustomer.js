var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "cmdavies10",
    password: "cadaverDavey434%",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(connection);
});