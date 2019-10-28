DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price DECIMAL(10,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer", "electronics", 1500.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("chair", "furniture", 100.25, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "electronics", 2500.00, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("desk", "furtniture", 499.01, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fan", "furniture", 10.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple", "food", 1.99, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("banana", "food", 3.00, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer monitor", "electronics", 150.25, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer keyboard", "electronics", 99.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("computer cord", "electronics", 0.99, 3);

SELECT * FROM products;