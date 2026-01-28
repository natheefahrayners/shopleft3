import express from 'express';
import { db } from './db.js';

const app = express();
app.use(express.json());

db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log(results);
});

const getUsers = () => {
    db.query('SELECT * FROM users', (err, data) => {
        if (err) throw err,
        console.log(data);
    })
};

const fetProducts = () => {
    db.query('SELECT * FROM products', (err,data) => {
        if (err) throw err;
    })
};

const deleteProduct = (code) => {
    db.query(
        "DELETE FROM products WHERE product_code = ?",
        [code],
        (err) => {
            if (err) throw err;
            console.log("Product deleted");
        }
    )
};

const insertProduct = (product) => {
    db.query(
        "INSERT INTO products SET ?",
        product,
        (err) => {
            if (err) throw err;
            console.log("Product added")
        }
    )
};

insertProduct({
    product_code: 'cola1',
    product_name: 'Coke',
    product_price: 15.99,
    product_quantity: 10
});

const updateProduct = (qty, code) => {
    db.query(
        "UPDATE products SET product_quantity=? WHERE product_code=?",
        [qty, code],
        (err) => {
            if (err) throw err;
            console.log("Product updated")
        }
    )
};

app.listen(5000, () => console.log("running on port 5000"));