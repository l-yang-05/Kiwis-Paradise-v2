
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

// Defining api route for /api/contacts
router.get('/contacts', (req, res) => {
    const sqlQuery = "SELECT * FROM ecom_db.Contacts"
    connection.query(sqlQuery, (err, data) => {
        if (err) throw new Error(`${req.statusCode}: Page did not load properly`)
        res.json(data)
    })
})

module.exports = router