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
    runApp();
});

function runApp() {
    inquirer.prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "View Low Inventory",
                "Add to Inventory",
                "Add New Product",
                "Exit"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    viewProducts();
                    break;

                case "View Low Inventory":
                    viewInventory();
                    break;

                case "Add to Inventory":
                    addInventory();
                    break;

                case "Add New Product":
                    addProduct();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
};

function viewProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "---" +
                "\nItem ID: " + res[i].item_id +
                "\nProduct Name: " + res[i].product_name +
                "\nDepartment Name: " + res[i].department_name +
                "\nPrice: " + res[i].price +
                "\nStock Quantity: " + res[i].stock_quantity
            )
        }
    });
    runApp();
};