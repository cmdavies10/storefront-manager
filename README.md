# BAMAZON STOREFRONT

## OVERVIEW
This is a command line interface application that utilizes Node and MySQL to
allow users to interact with data using a mock online store. Two separate CLI
applications mimic the user interface from a customer and a manager viewpoint.
The structure and initial content for the database used in both applications can
be found within the `bamazon.sql` and `seeds.sql` files.

### CUSTOMER VIEW
* Users start the application by entering `node bamazonCustomer` into the terminal.
* The details of each item available for purchase are then listed and the user is then prompted to choose the item ID of the product they wish to purchase.
* The app will prompt the user to choose how much/many of the item they want to
buy
* Once the customer has placed the order the app will check the store's
inventory and either (a) return "Error: Insufficient Quantity" if there is not enough
of that specific product or (b) reduce the inventory count by the amount
purhcased and return "Product Purchased Successfully and
Inventory Updated" and display the total cost.
* Screenshots:
![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/customer-view_items.png)
![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/customer-view_userprompt.png)
  ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/customer-view_purchase.png)

### MANAGER VIEW
* Start the application by entering `node bamazonManager` into the terminal
* The app will prompt the following choices:
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_initial.png)
* View Products for Sale
    * Lists all items available for purchase
    * Screenshot:
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_viewproducts.png)
* View Low Inventory
    * Lists all items with a stock quantity lower than 5
    * Screenshot:
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_viewlowinventory.png)
* Add to Inventory
    * Prompts the user to choose which product they would like to add more of into
    inventory and asks how much/many they would like to add
    * Once user completes prompts, the app will display "Product inventory updated
    successfully" and will update the inventory in the database accordingly, as
    seen by adding 3 computers back into inventory after purchasing
    them in the `Customer View` app.
    * Screenshots:
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_addinventory_choice.png)
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_addinvetory_success.png)
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_addinventory_verify.png)
* Add New Product
    * Prompts the user for information about a new product and enters that
    product into the database
    * Screenshots:
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_addproduct.png)
    ![screenshot](https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/manager-view_addproduct_verify.png)

### TECHNOLOGIES USED
* Javascript, Node and MySQL
* Packages: Inquirer


