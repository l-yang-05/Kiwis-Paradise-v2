
const router = require('express').Router()
const mysql = require('mysql')

// Connects to mysql db to server
const connection = mysql.createConnection({
    host: process.env.host,
    port: 3306,
    user: process.env.user,
    password: process.env.MYPASSWORD,
    database: "ecom_db"
})

connection.connect((err) => {
    if (err) throw err
})

// Defining api route for /api/newContact
router.post('/newContact', (req, res, next) => {
    const { full_name, email, message } = req.body;
    const sqlQuery = `INSERT INTO ecom_db.Contacts (full_name, email, message) VALUES (?, ?, ?)`

    connection.query(sqlQuery, [full_name, email, message], (err, results) => {
        if (err) throw err;
        res.send(results)
    })
})

module.exports = router