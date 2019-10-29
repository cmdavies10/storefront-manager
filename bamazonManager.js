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
                    viewLowInventory();
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
                "--- Products for Sale ---" +
                "\nItem ID: " + res[i].item_id +
                "\nProduct Name: " + res[i].product_name +
                "\nDepartment Name: " + res[i].department_name +
                "\nPrice: " + res[i].price +
                "\nStock Quantity: " + res[i].stock_quantity
            )
        }
        runApp();
    });
};

function viewLowInventory() {
    var query = "SELECT * FROM products WHERE stock_quantity < 5";
    connection.query(query,
        function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log(
                    "--- Low Inventory ---" +
                    "\nItem ID: " + res[i].item_id +
                    "\nProduct Name: " + res[i].product_name +
                    "\nDepartment Name: " + res[i].department_name +
                    "\nPrice: " + res[i].price +
                    "\nStock Quantity: " + res[i].stock_quantity
                )
            }
            runApp();
        })

}

function addInventory() {
    connection.query("SELECT * FROM products", function(err, response) {
        if (err) throw err;
        inquirer.prompt([{
                name: "product",
                type: "rawlist",
                choices: function() {
                    var choicesArray = [];
                    for (var i = 0; i < response.length; i++) {
                        choicesArray.push(response[i].product_name)
                    }
                    return choicesArray;
                },
                message: "Which product would you like to update?"
            },
            {
                name: "inventory",
                type: "input",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    } else {
                        return false;
                    }
                },
                message: "How much inventory would you like to add?"
            }
        ]).then(function(answer) {
            // console.log(answer);
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                var chosenProduct;
                for (var i = 0; i < res.length; i++) {
                    if (res[i].product_name === answer.product) {
                        chosenProduct = res[i];
                    }
                };
                connection.query("UPDATE products SET ? WHERE ?", [{
                            stock_quantity: parseInt(chosenProduct.stock_quantity) + parseInt(answer.inventory)
                        },
                        {
                            product_name: answer.product
                        }
                    ],
                    function(error) {
                        if (err) throw err;
                        console.log("Product inventory updated successfully");
                        runApp();
                    }
                )
            });
        });
    });
};

function addProduct() {
    inquirer.prompt([{
            name: "product",
            type: "input",
            message: "What product would you like to add?"
        },
        {
            name: "department",
            type: "input",
            message: "Please enter the department name."
        },
        {
            name: "price",
            type: "input",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "What is the selling price per unit?"
        },
        {
            name: "inventory",
            type: "input",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "How many units would you like to add?"
        }
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO products SET ?", {
                product_name: answer.product,
                department_name: answer.department,
                price: answer.price,
                stock_quantity: answer.inventory
            },
            function(err) {
                if (err) throw err;
                console.log("Product successfully added to store");
                runApp();
            }
        )
    });
}