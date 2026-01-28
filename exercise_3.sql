CREATE DATABASE shopleft_db;
USE shopleft_db;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE products (
	product_code VARCHAR(40) PRIMARY KEY,
	product_name VARCHAR(45) NOT NULL,
    product_price DECIMAL(5,2) NOT NULL,
    product_quantity INT NOT NULL
);

INSERT INTO users (email, first_name, last_name, password)
VALUES ('matthew@lifechoices.co.za', 'matthew', 'brown', 'matthewbrown');

INSERT INTO products VALUES
('bar1', 'Bar One', 9.99, 20),
('hand1', 'Handy Andy', 19.99, 5),
('pot1', 'Potatoes', 39.99, 10),
('bil1', 'Biltong', 9.99, 15),
('juice1', 'Juice', 15.99, 8),
('cad1', 'Cadbury', 15.99, 2);