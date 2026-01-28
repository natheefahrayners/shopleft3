import mysql from 'mysql2';

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Theefah@20",
    database: "shopleft_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL connected...");
});