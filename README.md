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
![screenshot] (https://github.com/cmdavies10/storefront-manager/blob/master/screenshots/customer-view_items.png)


