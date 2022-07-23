const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'books_db'
    }
);



app.get("/books", (req, res) => {
    
    db.query('select * from favorite_books', (err, results) => {
    console.log(results);
    res.json(results);
});
});

app.listen(PORT, () => {
    console.log(`server runing on port: ${PORT}`);
})