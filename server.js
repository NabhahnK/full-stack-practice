const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/books", (req, res) => {
    res.json("some books");
});

app.listen(PORT, () => {
    console.log(`server runing on port: ${PORT}`);
})