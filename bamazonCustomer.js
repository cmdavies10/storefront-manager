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
    // console.log(connection);
});

function buyProduct() {
    connection.query("SELECT * FROM products", function(err, response) {
        if (err) throw err;
        for (var i = 0; i < response.length; i++) {
            console.log(
                "---" +
                "\nItem ID: " + response[i].item_id +
                "\nProduct Name: " + response[i].product_name +
                "\nDepartment Name: " + response[i].department_name +
                "\nPrice: " + response[i].price +
                "\nStock Quantity: " + response[i].stock_quantity
            )
        }
        console.log(response);
        inquirer.prompt([{
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < response.length; i++) {
                        choiceArray.push(response[i].item_id);
                    }
                    return choiceArray;
                },
                message: "Choose the item ID of the product you would like to purchase: "
            },
            {
                name: "quantity",
                type: "input",
                message: "Enter the quantity you would like to purchase: ",
                validate: function(value) {
                    if (isNaN(value) === false) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ]).then(function(answer) {
            var chosenProduct;
            for (var i = 0; i < response.length; i++) {
                if (response[i].item_id === answer.choice) {
                    chosenProduct = response[i];
                }
            }
            console.log(chosenProduct);
            console.log(chosenProduct.stock_quantity);
            console.log("price ---")
            console.log(chosenProduct.price);
            console.log("quantity ---");
            console.log(answer.quantity);
            if (answer.quantity > chosenProduct.stock_quantity) {
                console.log("Error: Insufficient Quantity")
            } else if (answer.quantity <= chosenProduct.stock_quantity) {

                connection.query(
                    "UPDATE products SET ? WHERE ?", [{
                            stock_quantity: chosenProduct.stock_quantity - answer.quantity
                        },
                        {
                            item_id: answer.choice
                        }
                    ],
                    function(error) {
                        if (error) throw error;
                        console.log("---")
                        console.log("Product Purchased Successfully and Inventory Updated")
                        console.log("Total Purchase Price: $" + chosenProduct.price * answer.quantity);
                    }
                )
            } else {
                console.log("ERROR")
            }
        });
    });
};

buyProduct();