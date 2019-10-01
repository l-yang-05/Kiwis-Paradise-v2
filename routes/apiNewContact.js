
const router = require('express').Router()
const mysql = require('mysql')


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecom_db"
})

connection.connect((err) => {
    if (err) throw err
})

router.post('/newContact', (req, res, next) => {
    const { full_name, email, message } = req.body;
    const sqlQuery = `INSERT INTO ecom_db.Contacts (full_name, email, message) VALUES (?, ?, ?)`

    connection.query(sqlQuery, [full_name, email, message], (err, results) => {
        if (err) throw err;
        console.log("Successfully inserted new contact!:", results)
        res.send(results)
    })
})

module.exports = router